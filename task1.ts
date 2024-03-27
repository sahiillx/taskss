interface UserTimestamp {
    logged_in: Date;
    logged_out: Date;
    lastSeenAt: Date;
}

interface UserDevice {
    userId: string;
    devices: UserTimestamp[];
}

// Sample
const users: UserDevice[] = [
    {
        userId: "user1",
        devices: [
            { logged_in: new Date("2024-03-26T08:00:00"), logged_out: new Date("2024-03-26T12:00:00"), lastSeenAt: new Date("2024-03-26T11:30:00") },
            { logged_in: new Date("2024-03-26T14:00:00"), logged_out: new Date("2024-03-26T18:00:00"), lastSeenAt: new Date("2024-03-26T17:45:00") }
        ]
    },
    {
        userId: "user2",
        devices: [
            { logged_in: new Date("2024-03-25T10:00:00"), logged_out: new Date("2024-03-25T15:00:00"), lastSeenAt: new Date("2024-03-25T14:45:00") }
        ]
    }
];

// Function to process user timestamps
function processUserTimestamps(usersData: UserDevice[]) {
    usersData.forEach(user => {
        console.log(`User ID: ${user.userId}`);
        user.devices.forEach(device => {
            console.log(`Device - Logged In at ${device.logged_in}, Logged Out at ${device.logged_out}, Last Seen At ${device.lastSeenAt}`);
            // Add your logic here to process timestamps for each device
        });
    });
}

// Calling Function
processUserTimestamps(users);