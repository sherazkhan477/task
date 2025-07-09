import pandas as pd 
from sklearn.model_selection import train_test_split 
from sklearn.preprocessing import LabelEncoder 
import xgboost as xgb
import seaborn as sns
import matplotlib.pyplot as plt
import lightgbm as lgb
from sklearn.metrics import mean_squared_error

# Set a Seaborn style for attractive plots
sns.set(style="whitegrid")
dark_palette = [  '#008B8B', '#556B2F',]
dark_palette2 = ['#00DCD9', '#0F9EA5', '#0E9888', '#1379B2', '#0E53B5']
dark_palette3 = ['#21D375', '#6BBF59', '#08A045', '#0B6E4F', '#073B3A']

# Load dataset
data = pd.read_csv('IBMEmployee_data.csv')

def combined_function():
    # --------- Model 1 ---------
    def model1():
        y = data['PerformanceRating']
        
        # Convert PerformanceRating to binary classes
        le = LabelEncoder() 
        y = le.fit_transform(y)
        
        # Feature columns
        features = ['TotalWorkingYears', 'YearsInCurrentRole', 'JobLevel', 'JobInvolvement', 'TrainingTimesLastYear', 'JobSatisfaction']
        x = data[features]
        
        x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)
        
        xgb_clf = xgb.XGBClassifier(n_estimators=100, learning_rate=0.1, max_depth=3)
        xgb_clf.fit(x_train, y_train)
        y_pred = xgb_clf.predict(x_test)

        # Plot feature importances and save
        plt.figure(figsize=(8, 6))
        xgb.plot_importance(xgb_clf, importance_type='weight', max_num_features=10) 
        plt.title('Feature Importances for Model 1')
        plt.set_cmap('coolwarm')  # Set a colorful colormap for the feature importance plot
        
        # Save the plot
        plt.savefig(r'C:\Users\KISHAN\Desktop\Sem-4_Proj\StaffSphere---Employee-Management-System\react-side\public\feature_importance_model1.png', bbox_inches='tight')
        plt.show()

    # --------- Chart 1 ---------
    def chart_1():
        bins = range(0, 45, 5)  # Create bins of size 5 from 0 to 40
        labels = [f'{i}-{i+4}' for i in bins[:-1]]
        data['WorkingYearsRange'] = pd.cut(data['TotalWorkingYears'], bins=bins, labels=labels, include_lowest=True)
        
        # Create the bar plot
        plt.figure(figsize=(10, 6))
        sns.barplot(x='WorkingYearsRange', y='PerformanceRating', data=data, palette='coolwarm')
        plt.title('Performance Rating by Total Working Years Range')
        plt.xlabel('Total Working Years Range')
        plt.ylabel('Performance Rating')
        plt.grid(True)
        
        # Save the plot
        plt.savefig(r'C:\Users\KISHAN\Desktop\Sem-4_Proj\StaffSphere---Employee-Management-System\react-side\public\barplot_performance_rating_by_working_years_range.png')
        plt.show()

    # --------- Chart 2 ---------
    def chart_2():
        plt.figure(figsize=(8, 6))
        sns.boxplot(x='JobLevel', y='PerformanceRating', data=data, palette=dark_palette2)
        plt.title('Job Level by Performance Rating')
        plt.xlabel('Job Level')
        plt.ylabel('Performance Rating')
        # plt.grid()
        
        # Save the plot
        plt.savefig(r'C:\Users\KISHAN\Desktop\Sem-4_Proj\StaffSphere---Employee-Management-System\react-side\public\chart_job_level_by_performance_rating.png')
        plt.show()

    # --------- Model 2 ---------
    def model_2():
        x = data.drop(columns=['YearsSinceLastPromotion'])
        y = data['YearsSinceLastPromotion']
        
        categorical_columns = ['BusinessTravel', 'Department', 'Gender', 'JobRole', 'MaritalStatus', 'OverTime']
        ordinal_columns = ['Education', 'EnvironmentSatisfaction', 'JobSatisfaction', 'RelationshipSatisfaction', 'WorkLifeBalance']
        
        x = pd.get_dummies(x, columns=categorical_columns, drop_first=True)
        
        le = LabelEncoder()
        for col in ordinal_columns:
            x[col] = le.fit_transform(x[col])
        x['Attrition'] = le.fit_transform(x['Attrition'])
        
        x_train, x_test, y_train, y_test = train_test_split(x, y, test_size=0.2, random_state=42)
        
        train_data = lgb.Dataset(x_train, label=y_train)
        test_data = lgb.Dataset(x_test, label=y_test, reference=train_data)
        
        params = {
            'objective': 'regression',
            'metric': 'rmse',
            'boosting_type': 'gbdt',
            'num_leaves': 31,
            'learning_rate': 0.05,
            'feature_fraction': 0.9
        }
        
        early_stopping_callback = lgb.early_stopping(stopping_rounds=100)
        model = lgb.train(params, train_data, valid_sets=[test_data], num_boost_round=1000, callbacks=[early_stopping_callback])
        
        y_pred = model.predict(x_test, num_iteration=model.best_iteration)

        # Plot feature importance and save
        plt.figure(figsize=(8, 6))
        lgb.plot_importance(model, max_num_features=10, color='purple')  # Custom color for LGBM plot
        plt.title("Feature Importance for Model 2")
        
        # Save the plot
        plt.savefig(r'C:\Users\KISHAN\Desktop\Sem-4_Proj\StaffSphere---Employee-Management-System\react-side\public\feature_importance_model2.png', bbox_inches='tight')

        plt.show()

    # --------- Chart 3 ---------
    def chart_3():
        plt.figure(figsize=(8, 6))
        sns.boxplot(x='YearsAtCompany', y='YearsSinceLastPromotion', data=data, palette='coolwarm')
        plt.title('Years At Company by Years Since Last Promotion')
        plt.xlabel('Years At Company')
        plt.ylabel('Years Since Last Promotion')
        plt.grid()
        
        # Save the plot
        plt.savefig(r'C:\Users\KISHAN\Desktop\Sem-4_Proj\StaffSphere---Employee-Management-System\react-side\public\chart_years_at_company_by_years_since_last_promotion.png')
        plt.show()

    # --------- Chart 4 ---------
    def chart_4():
        plt.figure(figsize=(8, 6))
        sns.boxplot(x='Education', y='YearsSinceLastPromotion', data=data, palette=dark_palette3)
        plt.title('Education by Years Since Last Promotion')
        plt.xlabel('Education')
        plt.ylabel('Years Since Last Promotion')
        plt.grid()
        
        # Save the plot
        plt.savefig(r'C:\Users\KISHAN\Desktop\Sem-4_Proj\StaffSphere---Employee-Management-System\react-side\public\chart_education_by_years_since_last_promotion.png')
        plt.show()

    # Call all methods in sequence
    model1()
    chart_1()
    chart_2()
    model_2()
    chart_3()
    chart_4()

# Call the combined function to execute all steps
combined_function()
