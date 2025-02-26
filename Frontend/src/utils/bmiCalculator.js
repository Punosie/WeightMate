export const calculateBMI = (weight, height) => {
    if (!weight || !height) return null;

    const heightInMeters = height / 100; // Convert cm to meters
    return (weight / (heightInMeters * heightInMeters)).toFixed(1); // Round to 1 decimal place
};
