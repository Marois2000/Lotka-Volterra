# Moose Population Simulation

## Overview

This repository contains a mathematical simulation of moose populations in relation to winter tick populations. The simulation is based on a modified version of the Lotka-Volterra competition model and represents moose populations in New Hampshire.

A 3D simulation of the model was created in Unity, and you can download it.

## Introduction

### Purpose

The simulation aims to answer the question of how long the moose population can survive on its current trajectory. It explores the impact of winter tick populations on moose and seeks to identify factors that could save the moose population.

### Methodology

The model compares tick population versus moose population, where an increase in ticks results in a decrease in moose. The duration of winter months is a crucial factor, affecting tick populations; shorter winters mean fewer ticks die off. The simulation evaluates the consequences of switching between long and short winters.

### Motivation

The project merges a passion for programming with a concern for the declining moose population in New Hampshire. By creating a model that represents this decline based on the significant factor of winter ticks, the project aims to contribute insights into potential solutions.

## Model Description

### Lotka-Volterra Competition Model

The simulation utilizes the Lotka-Volterra competition model to analyze how competition impacts the abundance of two species. In this case, the model examines how the tick population affects the moose population.

#### Species Competition Overview

- The abundance of one species directly influences the abundance of the other.
- Population growth is exponential, with each species contributing to the other's total population.
- The species α value determines how each species affects the other's population.

### How the Model Works

The C# script uses Euler's method to solve the differential equations derived from the Lotka-Volterra model. Winter months trigger tick population decline and moose repopulation. Parameters were adjusted based on data obtained from 1994-2016 on moose populations.

## Data Fitting

### Real World Data vs. Model

Comparing real-world data with the model's results, the moose population declined from approximately 7500 to about 3500. The model parameters were adjusted to fit the starting and ending moose population data. While the model doesn't precisely replicate real-world regression due to unaccounted factors, it serves as a valuable tool for understanding moose-tick dynamics.

### Parameter Explanation

- Tick growth rate is higher than moose because ticks reproduce faster.
- The alpha values appear small for moose due to the vast disproportion in populations.
- Moose carrying capacity is based on real-world data, and tick carrying capacity is estimated based on ticks per square mile.

#### Parameter Values

|         | Moose       | Ticks          |
|---------|-------------|----------------|
| R       | 0.001       | 0.5            |
| α       | 0.000027    | 15             |
| K       | 10,000      | 9,349,440,000  |

## Results

### Population Trajectory

After fitting the model to real-world data, it predicts that the moose population will reach zero in 30 years on the current trajectory. The model was then used to explore the impact of longer and shorter winters on the moose population.

### Shorter Winters

Shorter winters (3 months) result in insufficient time for moose to recover, leading to a continual decline in the moose population and a steady increase in the tick population.

### Longer Winters

Longer winters (4 months) provide the necessary time for moose to repopulate, resulting in an increased moose population over 30 years.

## Conclusion

The simulation indicates that, given the current trajectory, the moose population may decline to zero in 30 years. The model focuses on moose-tick competition, acknowledging that other factors may impact moose populations positively. The insight gained emphasizes the significance of ticks in driving moose population decline in New Hampshire.

Considering climate change's impact on shorter winters, the model suggests that addressing these changes is crucial to preserving the moose population.

## References

1. CK12-Foundation. CK12 Biology Flexbook 2.0. [Link](https://flexbooks.ck12.org/cbook/ck-12-biology-flexbook-2.0/r135/section/6.14/primary/lesson/competition-bio/)
2. Kusnetz, Nicholas. "Climate Change Is Killing New England’s Moose. Can Hunters Save Them?" Inside Climate News. [Link](https://insideclimatenews.org/news/29052017/climate-change-ticks-killing-new-england-moose-hunters/)
3. State of New Hampshire Fish and Game. Moose. [Link](https://www.wildlife.nh.gov/wildlife-and-habitat/species-occurring-nh/moose#:~:text=The%20current%20New%20Hampshire%20moose

## Acknowledgements

Thank you to Dr. Nelson for teaching me the skills needed to create this model and guiding me along the way!
