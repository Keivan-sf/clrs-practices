## Insertion-sort with middle tracking

The idea comes from the `E 2.3-6` in CLRS. It suggests we might be able to lower insertion-sort running time by using binary-search instead of linear-search. It's alluring yet not feasible. The 'why' however, is important. We simply have to change all the indices that take place after the inserted element position. Therefore taking the same amount of steps as normal insertion-sort.

But notice the word _'after'_; What if we only check if the new element at hand is lesser or greater than the current middle element of the sorted array? With that being considered, we can determine which end of the array the element will be closer to and perform normal or inverse insertion-sort respectively.

To understand this, imagine our current sorted array is `[1 , 3 , 17 , 29 , 78]` and we are trying to push `2` into it. The middle number is `17` thus we are certain that our new element will take place somewhere in the left side of the sorted array (since `2 < 17`). So now we may perform inverse insertion-sort starting with the first element of our sorted array, a fully reversed approach.

Notice that if were to perform the original insertion-sort here, we had to perform linear search on greater or equal amount of elements.

And of course, if the element is to take place on the right side of the array, we'll simply use the original insertion-sort approach.
