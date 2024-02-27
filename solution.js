const solution = (A, K) => {
    // If the array is empty, K is 0, or the array has only one element, return it as is
    if (A.length === 0 || K === 0 || A.length === 1) {
        return A;
    }
    
    const N = A.length;
    // Calculate effective rotations needed as rotating N times results in the same array
    const effectiveRotations = K % N;
    if (effectiveRotations === 0){
        return A;
    }
    
    // Use the spread operator to combine the rotated parts of the array
    const rotatedArray = [...A.slice(-effectiveRotations), ...A.slice(0, N - effectiveRotations)];
    return rotatedArray;
};