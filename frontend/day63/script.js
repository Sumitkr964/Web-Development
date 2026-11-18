// Scenario 1 — Weather Dashboard with Error Handling

const API_KEY = "2a717d2328246d064b8312d0ef961f1c";

async function getWeather(city) {
    
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${API_KEY}`);
    try {
        if (!response.ok) {
            throw new Error("City not found or API error!");
        }

        const data = await response.json();
        const temp = data.main.temp;

        console.log("City:", data.name);
        console.log("Temperature:", temp + "°C");
        console.log("Weather:", data.weather[0].description);

        if (temp >= 40) {
            throw new Error("Extreme hot weather!");
        }

        else if (temp <= 10) {
            throw new Error("Extreme cold weather!");
        }

        console.log("Weather is normal!");

    } catch (error) {
        console.log("Error:", error.message);
    }
}

//  getWeather("delhi");



// Scenario 2 — Bulk Email Sending Simulation with Parallel Promises and Error Handling

const emails = [
    "user1@gmail.com",
    "user2@gmail.com",
    "user3@gmail.com",
    "user4@gmail.com",
    "user5@gmail.com"
];

// Email sending function
function sendEmail(email) {
    return new Promise((resolve, reject) => {
        let time = Math.floor(Math.random()*5)

        setTimeout(() => {
            let prob = Math.floor(Math.random()*10)
            if (prob<5) {
                resolve(email + " sent successfully!");
            } else {
                reject(email + " failed to send!");
            }
        }, time*1000);
    });
}

// Send emails in parallel
async function sendBulkEmails() {

    const results = await Promise.allSettled(
        emails.map(email => sendEmail(email))
    );

    try {
        results.forEach(result => {
            if (result.status === "fulfilled") {
                console.log("SUCCESS:", result.value);
            } else {
                console.log("FAILED:", result.reason);
            }
        });

    } catch (error) {
        console.log("Error:", error.message);

    } finally {
        console.log("Email process is complete.");
    }
}

sendBulkEmails();
