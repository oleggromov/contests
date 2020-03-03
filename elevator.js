class Elevator {
    constructor() {
        this.pending = [];
        this.currentFloor = 0;
    }

    enqueue(floor, enquiredUp = true) {
        if (!this.pending.length) {
            this.move(floor);
            return;
        }

        const movingUp = this.pending[0] > this.currentFloor;

        if (enquiredUp && movingUp && floor < this.pending[0]) {
            this.pending.unshift(floor);
        } else {
            this.pending.push(floor);
        }
    }

    getQueueSize() {
        return this.queue.length;
    }

    move(floor) {
        // finish the move on the closest floor
        this.currentFloor = this.pending.pop();
        if (this.pending.length) {
            this.move(this.pending[0]);
        }
    }
}

class ElevatorSystem {
    constructor(elevatorsNumber) {
        this.elevators = new Array(elevatorsNumber).fill(1).map(() => new Elevator());
    }

    buttonPressed(floor, enquiredUp = true) {
        // pick an elevator:
        // - less busy
        // - closest + moving in the same direction
        // - the only available

        let elevator = this.elevators[0]
        for (let current of this.elevators) {
            if (current.getQueueSize() < elevator.getQueueSize()) {
                elevator = current;
            }
        }

        elevator.enqueue(floor, enquiredUp);
    }
}

// current: 0, queue: 2,3
// current: 1, queue: 2,3,0
// current: 3, queue: 0
// current: 2, queue: 1,0,10


// Possible directions:

// button pressed: 7th floor, up; current: 5, queue: 8,10 → pick: change queue to: 7,8,10
// button pressed: 7th floor, down: current: 5, queue: 8,10 → pass: change queue to: 8,10,7
// button pressed: 0th floor, up: current: 5, queue: 8,10 → pass, change queue to: 8,10,0
// button pressed: 2nd floor, up: current: 10, queue: 12 → pass: 12,2
// button pressed: 2nd floor, up: current: 10, queue: 1 → pick: 2,1
