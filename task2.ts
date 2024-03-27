interface Trip {
    startPoint: string;
    endPoint: string;
}

class Shipment {
    pickUpPoints: Set<string>;
    dropPoints: Set<string>;

    constructor(pickUpPoints: string[], dropPoints: string[]) {
        this.pickUpPoints = new Set(pickUpPoints);
        this.dropPoints = new Set(dropPoints);
    }

    isValidTrips(trips: Trip[]): boolean {
        const visitedPickUps = new Set<string>();
        const visitedDropOffs = new Set<string>();

        for (const trip of trips) {
            if (!this.pickUpPoints.has(trip.startPoint) || (!this.dropPoints.has(trip.endPoint) && !trip.endPoint.startsWith('W'))) {
                return false;
            }

            visitedPickUps.add(trip.startPoint);
            if (!trip.endPoint.startsWith('W')) visitedDropOffs.add(trip.endPoint);
        }

        return this.setsEqual(visitedPickUps, this.pickUpPoints) && this.setsEqual(visitedDropOffs, this.dropPoints);
    }

    setsEqual(setA: Set<string>, setB: Set<string>): boolean {
        return setA.size === setB.size && [...setA].every(item => setB.has(item));
    }
}

// Example Usage
const shipment = new Shipment(['A', 'B'], ['C', 'D']);
const trips: Trip[] = [
    { startPoint: 'A', endPoint: 'W' },
    { startPoint: 'B', endPoint: 'W' },
    { startPoint: 'W', endPoint: 'C' },
    { startPoint: 'W', endPoint: 'D' }
];

console.log(shipment.isValidTrips(trips)); // Output: true