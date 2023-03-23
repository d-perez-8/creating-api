const express = require('express')
const app = express()
const cors = require('cors')
const PORT = 8000

app.use(cors())

let richestPeople = {
    "bernard arnault": {
        "Rank": 1,
        "Age": 73,
        "Residence": "Paris, France",
        "Job Title": "CEO and Chair: LVMH (LVMUY)",
        "Net Worth": "$186 billion",
        "Top Assest": "Christian Dior Ownership Stake: 97.5% ($148 billion total)",
        "Other Assets": "Moelis & Company equity ($27.9 billion public asset) and $10.7 billion in cash"
    },
    "elon musk": {
        "Rank": 2,
        "Age": 51,
        "Residence": "Texas, USA",
        "Job Title": "Co-founder and CEO: Tesla",
        "Net Worth": "$184 billion",
        "Top Assest": "Tesla Ownership Stake: 13% ($70 billion)",
        "Other Assets": "Space Exploration Technologies ($48.9 billion private asset), The Boring Company ($3.33 billion private asset), Twitter ($10.5 billion private asset)"
    },
    "jeff bezos": {
        "Rank": 3,
        "Age": 59,
        "Residence": "Washington, USA",
        "Job Title": "Founder and Executive Chair: Amazon (AMZN)",
        "Net Worth": "$116 billion",
        "Top Asset": "Amazon Ownership Stake: 10% ($91.5 billion)",
        "Other Assets": "Blue Origin ($11.2 billion private asset), The Washington Post ($250 million private asset), and $12.8 billion in cash"
    },
    "bill gates": {
        "Rank": 4,
        "Age": 67,
        "Residence": "Washington, USA",
        "Job Title": "Co-founder: Microsoft (MSFT)",
        "Net Worth": "$113 billion",
        "Top Asset": "Microsoft Ownership Stake: 1.4% ($25.4 billion)",
        "Other Assets": "$57.4 billion in cash and billions over multiple other companies"
    },
    "Warren Buffett": {
        "Rank": 5,
        "Age": 92,
        "Residence": "Nebraska, USA",
        "Job Title": "CEO: Berkshire Hathaway (BRK.A)",
        "Net Worth": "$106 billion",
        "Top Asset": "Berkshire Hathaway Ownership Stake: 14% ($105 billion)",
        "Other Assets": "$1.15 billion in cash"
    },
    "unknown": {
        "response": "The person you are looking for is not in the top 5 richest people as of March 2nd, 2023."
    }
}

app.get('/', (request, response) => {
    response.sendFile(__dirname + "/index.html")
})

app.get('/api/:name', (request, response) => {
    const richPerson = request.params.name.toLowerCase()
    if (richestPeople[richPerson]) {
        response.json(richestPeople[richPerson])
    } else {
        response.json(richestPeople['unknown'])
    }
})

app.listen(process.env.PORT || PORT, () => {
    console.log(`Running on port ${PORT}`)
})