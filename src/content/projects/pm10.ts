
export const pm10Project = {
  slug: "pm10-estimation-via-bayesian-analysis",
  title: "Bayesian Analysis of PM10 Pollution in Italy",
  description: "A Bayesian analysis of PM10 air pollution in Italy, focusing on predicting pollution levels in Modena using data from neighboring cities and local atmospheric conditions.",
  longDescription: "This project explores PM10 pollution dynamics through both frequentist and Bayesian linear models. A key feature is the implementation of a custom Gibbs Sampler with a Metropolis-Hasting step to intelligently impute significant amounts of missing data, enabling a more granular prediction based on local weather and pollutant levels.",
  tech: ["R", "JAGS", "Statistics", "MCMC", "ggplot2"],
  categories: ["Data Science", "Bayesian Statistics"],
  externalLinks: {
    "View Code": "https://github.com/frapez1/Statistical-Methods-in-Data-Science/tree/master/SDS-2/Project"
  },
  image: "https://images.unsplash.com/photo-1743517126902-d1bdb96e6cb1?w=1200&h=600&fit=crop&crop=focalpoint&fp-x=0.5&fp-y=0",
  results: [
    "Developed a Bayesian linear model with strong predictive power, achieving a correlation of 0.96 between predicted and actual PM10 levels in Modena using data from neighboring cities.",
    "Engineered a custom Gibbs Sampler with a Metropolis-Hasting step to effectively impute a large volume of missing data for multiple atmospheric variables.",
    "Demonstrated that local factors (PM2.5, temperature, pressure) are also strong predictors of PM10 pollution, achieving a 0.83 correlation after data imputation."
  ],
  challenges: [
    "Overcoming the primary obstacle of sparse data, where many days were missing crucial atmospheric measurements, making standard modeling impossible.",
    "Implementing the Bayesian imputation algorithm from scratch, which required a deep understanding of Markov Chain Monte Carlo (MCMC) simulations to correctly sample from posterior distributions.",
    "Identifying the correct underlying statistical distribution (e.g., Beta vs. Normal) for each variable to ensure the imputation model was statistically valid and accurate."
  ],
  markdownContent: `
  
This project explores the dynamics of PM10 air pollution in several Italian cities using a dataset spanning from late 2018 to mid-2020. The primary goal was to build predictive models for PM10 levels in Modena. Two main hypotheses were tested:

1.  Can PM10 levels in Modena be predicted by the levels in the neighboring, geographically close cities of Bologna and Parma?
2.  Can PM10 levels in Modena be predicted more accurately by using other local atmospheric variables like PM2.5, temperature, and pressure?

A significant challenge in the second approach was the high volume of missing data. To overcome this, I implemented a special case of MCMC based on a **custom Gibbs Sampler with a Metropolis-Hasting step** to impute the missing values based on their inferred statistical distributions.

Both frequentist and **Bayesian linear models** were developed for each hypothesis. The results show that PM10 in Modena is strongly correlated with its neighbors and can also be effectively modeled using local pollutants and weather data, with the Bayesian models providing a robust estimation of parameter uncertainty.

---

## The Dataset and Initial Processing

The analysis began with a raw dataset of air quality metrics from the AQICN data platform.

* **Data Loading & Cleaning:** Data from multiple files were merged, filtered to retain only Italian cities, and structured into a time-series format.
* **Feature Selection:** The initial focus was on the **median daily PM10** values for the cities of interest.
* **Normalization:** To prepare the data for modeling (specifically for fitting Beta distributions), the PM10 values for each city were normalized to a range of [0.01, 0.99].
* **Handling Missing Data (Initial):** In the first part of the analysis any day (row), in every city, with a missing PM10 value was removed to create a complete, balanced dataset for inter-city comparison.

---

## Part 1: Predicting Modena PM10 Using Neighboring Cities

The first goal was to model Modena's PM10 levels as a function of the PM10 levels in Bologna and Parma, two cities located in the same geographical and industrial region (the Po Valley).

### Exploratory Data Analysis (EDA)

A correlation matrix revealed a high degree of positive correlation between the PM10 levels in Modena, Bologna, and Parma (correlation coefficients > 0.85), providing strong justification for the modeling approach. Autocorrelation (ACF) plots also showed significant temporal dependence, with one day's pollution being a strong predictor of the next.

![correlation](/images/projects/pm10/correlation.png "md:w-1/3 lg:w-1/3 mx-auto | Upper triangle of the correlation Matrix for PM10 between Modena, Bologna and Parma.")

### Modeling and Results

A linear relationship was modeled:
$$
\\text{Modena}_{PM10} = \\beta_0 + \\beta_1 \\times \\text{Bologna}_{PM10} + \\beta_2 \\times \\text{Parma}_{PM10} + \\epsilon
$$
Both a standard linear regression and a **Bayesian model in JAGS** were implemented. The Bayesian model confirmed the results of the linear regression but also provided full posterior distributions for the parameters, offering a richer understanding of model uncertainty.

Both models performed excellently, achieving a **correlation of more than 0.96** between the predicted values and the actual PM10 values for Modena.

![Scatter plot](/images/projects/pm10/scatter_plot_city.png "md:w-2/3 lg:w-2/3 mx-auto | Scatter plot between predicted and true values of PM10 in Modena.")
---

## Part 2: Predicting Modena PM10 Using Local Atmospheric Data

The second part aimed for a more granular prediction using local variables within Modena: **PM2.5, temperature, and pressure**.

### The Challenge: Missing Data Imputation

This approach was complicated by a large amount of missing data for these local variables. To solve this, I constructed a **Bayesian imputation model** using a **Gibbs sampler with a Metropolis-Hasting algorithm**. This technique generated plausible values for the missing data points by sampling from their inferred statistical distributions (either Beta or Normal), creating a complete dataset for modeling.

After imputation, EDA confirmed the expected physical relationships: PM10 showed a strong positive correlation with PM2.5, a moderate negative correlation with temperature, and a moderate positive correlation with pressure.


![Modena's correlation](/images/projects/pm10/modena_correlation.png "md:w-2/3 lg:w-2/3 mx-auto | Upper triangle of the correlation Matrix of Modena's Local Pollutants (After Imputation).")


### Modeling and Results

Using the newly imputed dataset, a new linear model was created:
$$
\\text{Modena}_{PM10} = \\beta_0 + \\beta_1 \\times \\text{pm25} - \\beta_2 \\times \\text{temperature} + \\beta_3 \\times \\text{pressure} + \\epsilon
$$
Again, both statistical and Bayesian models were fit. The models performed well, achieving a **correlation of approximately 0.83** between the predicted and actual PM10 values.

![Scatter plot](/images/projects/pm10/scatter_plot_modena.png "md:w-2/3 lg:w-2/3 mx-auto | Predicted vs. Actual PM10 for Modena (Local Factors Model).")

## Key Findings & Learnings

1.  **Strong Regional Influence:** Air pollution in the Po Valley is a regional phenomenon. The PM10 levels in Modena are highly predictable based on its neighbors (**0.96 correlation**), likely due to shared weather patterns and geography.

2.  **Local Factors are Also Key Predictors:** Local atmospheric conditions (PM2.5, temperature, pressure) are also powerful predictors of PM10 levels (**0.83 correlation**).

3.  **Bayesian Imputation as a Powerful Tool:** This project was a successful exercise in solving a critical data science problem, missing data, by implementing a sophisticated statistical technique. The custom Gibbs sampler created a complete dataset, enabling a deeper analysis that would have otherwise been impossible.

4.  **Bayesian vs. Frequentist Modeling:** For this problem, both modeling approaches yielded similar predictive accuracy. However, the **Bayesian framework provided richer insights** by delivering full probability distributions for each parameter, which is invaluable for quantifying model uncertainty.
  `

};