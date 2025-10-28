import { readFileSync, writeFileSync } from 'fs'
import { join, dirname } from 'path'
import { fileURLToPath } from 'url'

const __dirname = dirname(fileURLToPath(import.meta.url))
const projectRoot = join(__dirname, '..')

function parseResults() {
  const resultsPath = join(projectRoot, 'src/data/results.ts')
  const resultsContent = readFileSync(resultsPath, 'utf-8')
  
  const resultsMatch = resultsContent.match(/export const tournamentResults: YearResults\[\] = (\[[\s\S]*?\n\])/m)
  if (!resultsMatch) {
    throw new Error('Could not parse results data')
  }
  
  const resultsData = eval(resultsMatch[1])
  return resultsData
}

function calculateStats(resultsData) {
  const currentYear = "2025"
  
  let seasonEvents = 0
  let seasonTop10s = 0
  let seasonBestFinish = 999
  let seasonBestFinishName = ""
  let seasonEarnings = 0
  
  let careerWins = 0
  let careerTop10s = 0
  let careerBestFinish = 999
  let careerBestFinishName = ""
  let totalEvents = 0
  let careerEarnings = 0
  
  for (const yearData of resultsData) {
    for (const result of yearData.results) {
      totalEvents++
      
      const finishStr = result.finish
      let finishPos = 999
      
      if (finishStr === "1" || finishStr === "W" || finishStr.toLowerCase().includes("win")) {
        finishPos = 1
        careerWins++
      } else if (finishStr.startsWith("T")) {
        finishPos = parseInt(finishStr.substring(1))
      } else if (!finishStr.includes("CUT") && !isNaN(parseInt(finishStr))) {
        finishPos = parseInt(finishStr)
      }
      
      if (finishPos <= 10 && finishPos !== 999) {
        careerTop10s++
        if (yearData.year === currentYear) {
          seasonTop10s++
        }
      }
      
      if (finishPos < careerBestFinish) {
        careerBestFinish = finishPos
        careerBestFinishName = result.tournament
      }
      
      if (result.earnings) {
        const earnings = parseFloat(result.earnings.replace(/[$,]/g, ''))
        careerEarnings += earnings
        if (yearData.year === currentYear) {
          seasonEarnings += earnings
        }
      }
      
      if (yearData.year === currentYear) {
        seasonEvents++
        if (finishPos < seasonBestFinish) {
          seasonBestFinish = finishPos
          seasonBestFinishName = result.tournament
        }
      }
    }
  }
  
  const formatBestFinish = (pos) => {
    if (pos === 1) return "1st"
    if (pos === 2) return "2nd"
    if (pos === 3) return "3rd"
    return `T${pos}`
  }
  
  const formatEarnings = (amount) => {
    if (amount >= 1000000) {
      return `$${(amount / 1000000).toFixed(1)}M`
    } else if (amount >= 1000) {
      return `$${Math.round(amount / 1000)}K`
    }
    return `$${Math.round(amount)}`
  }
  
  const uniqueTours = new Set()
  for (const yearData of resultsData) {
    for (const result of yearData.results) {
      uniqueTours.add(result.venue)
    }
  }
  
  return {
    season: {
      events: seasonEvents,
      top10s: seasonTop10s,
      bestFinish: seasonBestFinish === 999 ? "N/A" : formatBestFinish(seasonBestFinish),
      bestFinishTournament: seasonBestFinishName.replace(/presented by.*$/i, '').trim(),
      earnings: formatEarnings(seasonEarnings)
    },
    career: {
      wins: careerWins,
      top10s: careerTop10s,
      bestFinish: careerBestFinish === 999 ? "N/A" : formatBestFinish(careerBestFinish),
      bestFinishTournament: careerBestFinishName,
      events: totalEvents,
      earnings: formatEarnings(careerEarnings) + "+",
      tours: uniqueTours.size
    }
  }
}

function updateStatsFile(stats) {
  const statsPath = join(projectRoot, 'src/data/stats.ts')
  
  const newContent = `import { StatItem } from "./types"

export const seasonStats: StatItem[] = [
  { label: "Events", value: "${stats.season.events}", sublabel: "2025 Season" },
  { label: "Top 10s", value: "${stats.season.top10s}", sublabel: "This Year" },
  { label: "Best Finish", value: "${stats.season.bestFinish}", sublabel: "${stats.season.bestFinishTournament}" },
  { label: "Earnings", value: "${stats.season.earnings}", sublabel: "2025 Season" }
]

export const careerStats: StatItem[] = [
  { label: "Career Wins", value: "${stats.career.wins}" },
  { label: "Top 10s", value: "${stats.career.top10s}", rank: "Career" },
  { label: "Best Finish", value: "${stats.career.bestFinish}", rank: "${stats.career.bestFinishTournament}" },
  { label: "Events Played", value: "${stats.career.events}", rank: "Career" },
  { label: "Career Earnings", value: "${stats.career.earnings}" },
  { label: "Tours Played", value: "${stats.career.tours}", rank: "Professional Tours" }
]
`
  
  writeFileSync(statsPath, newContent, 'utf-8')
}

try {
  console.log('📊 Calculating statistics from results...\n')
  
  const resultsData = parseResults()
  const stats = calculateStats(resultsData)
  
  console.log('Season Stats (2025):')
  console.log(`  Events: ${stats.season.events}`)
  console.log(`  Top 10s: ${stats.season.top10s}`)
  console.log(`  Best Finish: ${stats.season.bestFinish} (${stats.season.bestFinishTournament})`)
  console.log(`  Earnings: ${stats.season.earnings}\n`)
  
  console.log('Career Stats:')
  console.log(`  Wins: ${stats.career.wins}`)
  console.log(`  Top 10s: ${stats.career.top10s}`)
  console.log(`  Best Finish: ${stats.career.bestFinish}`)
  console.log(`  Events: ${stats.career.events}`)
  console.log(`  Earnings: ${stats.career.earnings}`)
  console.log(`  Tours: ${stats.career.tours}\n`)
  
  updateStatsFile(stats)
  
  console.log('✅ Successfully updated src/data/stats.ts')
} catch (error) {
  console.error('❌ Error:', error.message)
  process.exit(1)
}

