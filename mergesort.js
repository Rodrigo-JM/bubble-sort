function split(wholeArray) {
  let midPoint = Math.trunc(wholeArray.length / 2);
  let firstHalf = wholeArray.slice(0, midPoint);
  let secondHalf = wholeArray.slice(midPoint);
  /* your code here to define the firstHalf and secondHalf arrays */

  return [firstHalf, secondHalf];
}

function merge(firstHalf, secondHalf) {
    let i = 0
    let j = 0
    let merged = []

    while (i < firstHalf.length || j < secondHalf.length) {
        let lowElement = firstHalf[i];
        let highElement = secondHalf[j];

        if (lowElement < highElement || highElement === undefined) {
            merged.push(lowElement)
            i++
        } else if (lowElement >= highElement || lowElement === undefined) {
            merged.push(highElement)
            j++
        }
    }

    return merged
}

const mergeSort = (array) => {
    if (array.length === 1) {
        return array

    } else {
        let [firstHalf, secondHalf] = split(array)

        let firstHalfMerged = mergeSort(firstHalf);
        let secondHalfMerged = mergeSort(secondHalf);

        return merge(firstHalfMerged, secondHalfMerged)
    }
}