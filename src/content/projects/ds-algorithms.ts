export const dsalgorithmsProject = {
  slug: "high-performance-ds-algorithms",
  title: "High-Performance Data Structures & Algorithms",
  description: "A from-scratch implementation of Bloom filters, recursive counting-sort, and K-Means clustering, each optimized for speed and scalability.",
  longDescription: "Built a JIT-accelerated Bloom Filter to dedupe 200M+ passwords in under 20 minutes with zero false positives. Developed a recursive, linear-time alphabetical sort using Counting Sort on strings. Crafted an end-to-end, object-oriented K-Means pipeline with PCA visualization and compared its results to a provable global optimum via MILP.",
  tech: ["Python", "NumPy", "Numba", "PySpark", "scikit-learn", "PuLP", "matplotlib"],
  categories: ["Big Data", "Machine Learning", "Unsupervised Learning"],
  externalLinks: {
    "View Code": "https://github.com/frapez1/Algorithmic-Methods-of-Data-Mining/tree/master/HW-4"
  },
  image: "https://images.unsplash.com/photo-1638645540399-40229456a236?w=1200&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0.45",
  results: [
    "Processed 200 million passwords in ~19.8 minutes with zero false positives using a JIT-compiled Bloom Filter",
    "Achieved linear-time alphabetical sort (O(n·d)) on arbitrary word lists via recursive Counting Sort",
    "Implemented full K-Means pipeline with PCA visualization and demonstrated local vs. global clustering cost gap (2370 vs. 1564.6 SSD)"
  ],
  challenges: [
    "Designing and JIT-compiling 20 custom hash functions for a 10 billion-bit Bloom Filter",
    "Adapting Counting Sort to a recursive string-sorting algorithm with dynamic subgroups",
    "Formulating and solving a K-median MILP to find the provable global clustering optimum"
  ],
  markdownContent: `
This project showcases the from-scratch implementation of several fundamental data structures and algorithms, with a strong focus on performance optimization, robust design, and empirical analysis. This collaborative work is divided into three main parts, plus an investigation into algorithm optimality.

1.  **High-Performance Hashing**: Building a Bloom Filter with JIT-compiled hash functions to rapidly check for password duplication in a massive dataset.
2.  **Recursive Alphabetical Sort**: Implementing a linear-time sorting algorithm based on Counting Sort to sort words alphabetically.
3.  **Object-Oriented K-Means Clustering**: Developing a complete, unsupervised machine learning pipeline to find patterns in a wine dataset.
4.  **K-Means vs. Global Optimum**: Demonstrating the limitations of K-Means by comparing its result to a globally optimal solution found using Mixed-Integer Linear Programming.

-----

## My Contributions to the Project

In this high-performance algorithms project, our team worked together to tackle complex challenges in data structures and machine learning. I focused on the following areas:

* **High-Performance Hashing (Bloom Filter):** I contributed to the **design and implementation of the JIT-accelerated Bloom Filter**. My specific focus was on **crafting the custom hash functions and optimizing their performance using Numba**, enabling the efficient deduplication of over 200 million passwords.
* **Recursive Alphabetical Sort (Counting Sort):** I contributed in **developing the recursive logic for the Counting Sort algorithm**. My work involved adapting this linear-time sorting method to handle strings effectively, ensuring its correct and efficient alphabetical sorting capabilities.
* **Object-Oriented K-Means Clustering:** I was responsible for **building out key components of the object-oriented K-Means clustering pipeline**. This included setting up critical preprocessing steps (like feature scaling and PCA), implementing the iterative K-Means algorithm with its convergence criteria, and developing the dynamic visualization of the clustering process.
* **K-Means vs. Global Optimum Analysis:** I led the in-depth **investigation comparing our K-Means implementation to a provable global optimum**. This involved **formulating the K-median problem as a Mixed-Integer Linear Program (MILP) and solving it with PuLP**, which definitively demonstrated K-Means' potential to converge to local minima. This particular challenge highlighted my ability to apply advanced mathematical modeling to evaluate algorithmic performance.

-----

## 1. High-Performance Hashing and Bloom Filters 🕵️‍♂️

### The Challenge

In any large-scale system with user accounts, checking for username or password availability must be nearly instantaneous. Performing a direct search against a database with billions of entries for every request is not feasible. The challenge was to design and implement a highly efficient, space-conscious data structure to solve this membership testing problem.

### Our Solution

We implemented a **Bloom Filter** from scratch, a probabilistic data structure ideal for this scenario. The key to its performance was a focus on computational speed and efficient memory usage.

* **Custom Hash Functions**: We created k=20 distinct hash functions. Each function computes a hash value using a linear combination of a password's ord() values and a set of pre-generated random coefficients, all performed modulo a large prime number m. This is defined in the hash_configuration class.
* **Performance Optimization**: To accelerate the expensive hash calculations, we used **numba's @jit (Just-In-Time) compiler** to convert the core numerical Python code into highly optimized machine code. The parallel=True flag in the @jit decorator further parallelized the computations. The entire process was managed using numpy for efficient, vectorized operations.
* **Implementation**: A numpy boolean array of size m = 10,000,000,019 served as the filter. We streamed 100 million passwords from passwords1.txt, and for each password, set the bits at its 20 corresponding hash indices to True. We then streamed the passwords from passwords2.txt to check for potential duplicates.

### Results & Learnings

The optimized algorithm processed both massive datasets in under 20 minutes, a significant achievement for a single machine.

* **Hash Functions Used**: 20
* **Probably Duplicate Passwords Detected**: 14,000,000
* **Theoretical False Positive Probability**: 1.467 x 10<sup>-15</sup>
* **Execution Time**: 1191 seconds (~19.8 minutes)

To validate the filter's accuracy, we implemented a verification script using **Apache Spark (pyspark)**. This MapReduce job performed a distributed distinct().count() on the union of the two datasets to find the exact number of duplicates. The result was exactly **14,000,000**, confirming that our Bloom Filter produced **zero false positives**. This demonstrates a strong capability in not only implementing probabilistic data structures but also in using big data tools to verify them.

-----

## 2. Recursive Alphabetical Sort Using Counting Sort 🔡

### The Challenge

The goal was to sort a list of words alphabetically by implementing a non-comparison-based sorting algorithm. The chosen method was **Counting Sort**, which can achieve linear time complexity under the right conditions.

### Our Solution

We developed an approach to adapt Counting Sort—typically used for integers—to sort strings recursively.

1.  **Word-to-Array Conversion**: The word2array function preprocesses the list of words into a numpy matrix, where each row represents a word and each column an ord() value of a character. Shorter words are padded to ensure uniform matrix dimensions.
2.  **Core Counting Sort**: The counting_sort function sorts an array of integers in linear time by using an auxiliary array to count element frequencies.
3.  **Recursive Sorting Logic**: The main alpha_rec function implements the sorting strategy. It first sorts the entire matrix of words based on the first character using Counting Sort. It then identifies sub-groups of words that share the same first letter and **recursively calls itself** on each of these sub-groups, moving to the next character column. This "divide and conquer" approach continues until all words are sorted.


### Results & Learnings

The algorithm correctly sorts any list of words. The primary learning outcome was a deep understanding of its performance characteristics.

* **Theoretical Complexity**: The algorithm has a time complexity of **O(n·d)**, where n is the number of words and d is the length of the longest word. This is because it performs a linear-time Counting Sort d times on lists of decreasing size, with the total work being proportional to the total number of characters.
* **Empirical Analysis**: We wrote dedicated functions (plot_time_complexity_...) to measure the algorithm's runtime against randomly generated data. The plots confirmed the theoretical analysis: runtime scaled linearly with n (for fixed d), linearly with d (for fixed n), and quadratically when n=d, perfectly matching the **O(n·d)** complexity.

![Sorting speed](/images/projects/ds_algorithms/sorting.png "md:w-2/3 lg:w-2/3 mx-auto | Empirical running time of the counting sort algorithm")
-----

## 3. Object-Oriented K-Means Clustering for Wine Analysis 🍷

### The Challenge

The task was to implement K-Means clustering from scratch to find natural groupings in a wine dataset based on 13 chemical features. This required building a full unsupervised learning pipeline, from data preprocessing to visualization.

### Our Solution

We designed a robust, reusable k_mean python class that encapsulates the entire clustering process.

* **Preprocessing Pipeline**: The class's constructor automatically handles critical preprocessing steps:
    * **Feature Scaling**: Using **sklearn.preprocessing.scale**, it standardizes all features to have a mean of 0 and a standard deviation of 1. This prevents features with larger numeric ranges from dominating the distance calculations.
    * **Dimensionality Reduction**: It uses **sklearn.decomposition.PCA** to reduce the 13-dimensional data to 2 principal components, essential for visualization.
* **K-Means Algorithm**: The apply method implements the iterative algorithm with random centroid initialization. A key feature is its intelligent **convergence criterion**: the loop terminates not after a fixed number of iterations, but when the reduction in the Sum of Squared Distances (SSD) between iterations becomes negligible (less than 0.1% of the total SSD), ensuring an efficient path to a stable solution.
* **Dynamic Visualization**: We created a custom SubplotAnimation class that uses matplotlib.animation to generate a video of the clustering process. This powerful visual tool shows the cluster assignments and centroids evolving with each iteration on one subplot, while simultaneously plotting the decreasing SSD on another.

![Clustering](/images/projects/ds_algorithms/clustering.png "md:w-2/3 lg:w-2/3 mx-auto | Intermediate frame of the animation with cluster and associated SSD.")

### Results & Learnings

Using the Elbow Method, we determined the optimal number of clusters to be **K=3**. The algorithm successfully partitioned the wines into three well-separated clusters.

The most insightful part was analyzing the feature distributions for each cluster. Features like **'Flavanoids'**, **'Alcohol'**, and **'Proline'** were key differentiators, showing distinct, separated histograms for each cluster. In contrast, features like 'Magnesium' and 'Ash' were poor differentiators. This analysis suggests the clusters correspond to wines made from different grape cultivars or grown under different conditions, which aligns with the known origin of the data.


-----

## 4. K-Means vs. The Global Optimum

### The Challenge

Standard K-Means is fast but offers no guarantee of finding the best possible clustering solution due to its random initialization. The challenge was to demonstrate this by comparing the result of our K-Means implementation to a provably optimal solution.

### Our Solution

We took an advanced approach from the world of operations research to find the true global minimum.

1.  **Mathematical Formulation**: We modeled the clustering problem as a **K-median** problem, which can be formulated as a **Mixed-Integer Linear Program (MILP)**. This involves defining binary decision variables, a set of linear constraints, and an objective function to minimize the total squared distance.
2.  **Solving for the Optimum**: We used the **pulp** Python library, a powerful tool for modeling and solving MILP problems. pulp interfaces with industrial-strength solvers that use sophisticated algorithms like **Branch & Bound** to search the solution space and guarantee that the result is the globally optimal one.

### Results & Learnings

The comparison yielded a clear result:

* **K-Means Cost (SSD)**: Our K-Means algorithm converged to a local minimum with a cost of approximately **2370**.
* **Global Minimum Cost (SSD)**: The MILP solver found the guaranteed global minimum cost to be **1564.6**.

This experiment definitively demonstrates the primary weakness of K-Means: it can easily get trapped in a suboptimal solution. **However**, it should be mentioned that K-median MILP can lead to better solution but it is still too slow. This is the main reason that makes K-mean popular... is its speed. 
This work highlights a deep understanding of algorithmic limitations and the ability to use advanced mathematical programming techniques to formally evaluate them.

![Clustering](/images/projects/ds_algorithms/k_mean.png "md:w-2/3 lg:w-2/3 mx-auto | Visual example of the difference in performances between k-mena and k-median.")
  `

};