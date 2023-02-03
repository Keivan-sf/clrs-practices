## Insertion-sort with linked lists

The idea comes from the `E 2.3-6` in CLRS. It suggests we might be able to lower insertion-sort running time by using binary-search instead of linear-search. It's alluring yet not feasible.
The 'why' however, is important. We simply have to change all the indices of the array no matter how soon we find the right position of the new element at hand. So the difficulty on this step remains `n^2`.

But lets assume there was an imaginary way to push an element into the array and indices would all be updated in `1` step. We would certainly hit the road towards binary-search wouldn't we?

As you know linked lists do not bother with indices, therefore pushing an element is going to take a single step. Nonetheless, we still can't use binary-search. Because we can't find the middle of the list!

What if, we start keeping track of the middle element? It's not that costly! It won't allow us to use binary-search but still, it'll open a way towards the linear-search only being applied to half of the list at hand.

### How should we keep track of the middle element?

At first, we only have one element in our list, therefore the list is technically sorted. Besides, that single element is the middle element of the list as well (no sh\*t Sherlock).

Let's say we add an element and sort the list just like the normal insertion-sort approach. But we secretly will take notice in whether the element is added to the left side of the middle element or the right side of it. If it's the left we increase variable `l` by 1, and other wise we do the same for `r`.

> Please note the element does not have to be the neighbor of the middle element. If it's lesser than the middle then it's on the left and vice versa

Whenever there are two elements added to the same side of the middle, we can be certain that the middle element is no longer in middle. We announce the new middle, the neighbor of the previous middle in the side that elements were added. (what?)

Let's say `l%2 == 0`, what we do is simple as this: `middle = middle.left`.

So if there are two elements added to the left side, `l` would be even. Therefore, the middle must change. Same thing happens for the right side
