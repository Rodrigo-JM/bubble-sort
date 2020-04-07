describe("Split Array function", function () {
  it("is able to split an array into two halves", function () {
    expect(split([1, 2, 3, 4, 5])).toEqual([
      [1, 2],
      [3, 4, 5],
    ]);
  });
});

describe("Merge function", function () {
  it("is able to merge two sorted arrays into one sorted array", function () {
    expect(merge([1, 2], [3, 4, 5])).toEqual([1, 2, 3, 4, 5])
  });
});

describe("mergeSort", function () {
    it("sorts an array", function () {
        expect(mergeSort([4, 3, 2, 1])).toEqual([1, 2, 3, 4])
    })
})