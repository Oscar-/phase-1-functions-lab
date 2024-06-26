// Code your solution in this file
const distanceFromHqInBlocks = (pickupLocation) => {
    return Math.abs(pickupLocation - 42)
}

const distanceFromHqInFeet = (pickupLocation) => {
    return distanceFromHqInBlocks(pickupLocation) * 264
}

const distanceTravelledInFeet = (start, destination) => {
    return Math.abs(start - destination) * 264
}

const calculatesFarePrice = (start, destination) => {
    let totalFeet = distanceTravelledInFeet(start, destination)
    if(totalFeet < 400) {
        return 0
} else if (totalFeet >= 400 && totalFeet < 2000) {
    return (totalFeet - 400) * .02
} else if (totalFeet >= 2000 && totalFeet < 2500){
    return 25
} else if (totalFeet >= 2500){
    return 'cannot travel that far'
}
}  
  