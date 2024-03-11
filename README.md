# Credit Card Fraud Detection

This repository contains the implementation of a machine learning model for detecting credit card fraud. The model is trained on a dataset containing transactions made by credit cards. The goal is to accurately identify fraudulent transactions to prevent financial losses for both the credit card companies and their customers.

## Dataset

The dataset used for training and evaluation is confidential and cannot be shared publicly. However, it consists of a large number of transactions made by credit cards in September 2013 by European cardholders. The dataset is highly unbalanced, with only a small fraction of transactions labeled as fraudulent.

This dataset presents transactions that occurred in two days, where we have 492 frauds out of 284,807 transactions. The dataset is highly unbalanced, the positive class (frauds) account for 0.172% of all transactions.

It contains only numerical input variables which are the result of a PCA transformation. Unfortunately, due to confidentiality issues, we cannot provide the original features and more background information about the data. Features V1, V2, … V28 are the principal components obtained with PCA, the only features which have not been transformed with PCA are 'Time' and 'Amount'. Feature 'Time' contains the seconds elapsed between each transaction and the first transaction in the dataset. The feature 'Amount' is the transaction Amount, this feature can be used for example-dependant cost-sensitive learning. Feature 'Class' is the response variable and it takes value 1 in case of fraud and 0 otherwise.

Dataset :  [https://www.kaggle.com/datasets/mlg-ulb/creditcardfraud/data]

# Headmap of all the features

![image](https://github.com/TheValour/ML-Modal/assets/108991640/da343576-fc0a-4ba0-a40a-3a73b6fae526)

## Requirements

To run the Jupyter Notebook `Credit Card Fraud Detection.ipynb`, you'll need the following Python libraries:

- NumPy
- Pandas
- Matplotlib
- Seaborn
- Scikit-learn

## Model

The machine learning model used for fraud detection is based on an ensemble of various algorithms, including:

- Logistic Regression
- Random Forest
- Decision Tree Regressor

Hyperparameter tuning and cross-validation techniques are employed to optimize the performance of the model.

## Evaluation

The performance of the model is evaluated using various metrics, including accuracy, F1-score and AUPRC. Special attention is given to the recall metric to ensure that fraudulent transactions are correctly identified, minimizing false negatives.

## Conclusion

Credit card fraud detection is a critical task in the financial industry. This project aims to provide an effective solution using machine learning techniques. Feel free to explore the Jupyter Notebook and provide feedback or suggestions for improvement.

**Note:** This project is for educational and research purposes only. The model's performance in real-world scenarios may vary, and additional considerations, such as scalability and deployment, need to be addressed for practical implementation.
