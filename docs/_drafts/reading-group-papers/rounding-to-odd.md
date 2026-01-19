# Rounding to Odd

[Boldo, Sylvie, and Guillaume Melquiond. "Emulation of a FMA and correctly rounded sums: Proved algorithms using rounding to odd." IEEE Transactions on Computers 57, no. 4 (2008): 462-471.](https://ens-lyon.hal.science/inria-00080427/document)

Written in 2008, the paper describes a technique for more efficient accurate floating point arithmetic.

Notably the paper used the Coq proof assistant to prove their algorithm is correct.

The paper had real world impact as this technique was applied to:

- A function in CRlibm which was able to see a 2% performance improvement.
- [GCC applied the technique](https://www.exploringbinary.com/gcc-avoids-double-rounding-errors-with-round-to-odd/)