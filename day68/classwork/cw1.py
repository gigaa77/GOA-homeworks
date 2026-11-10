import numpy as np
import matplotlib.pyplot as plt
from sklearn.linear_model import LinearRegression
from sklearn.metrics import mean_squared_error

np.random.seed(42)

# -----------------------------
# მონაცემების შექმნა
# -----------------------------
def generate_data(n):
    X = np.random.randint(1, 20, n).reshape(-1, 1)
    y = 2 * X + 1 + np.random.randn(n, 1) * 4
    return X, y

# -----------------------------
# ფიქსირებული სატესტო მონაცემები
# -----------------------------
X_test, y_test = generate_data(1000)

# -----------------------------
# ექსპერიმენტი
# -----------------------------
sizes = [10, 50, 100, 500, 1000]
errors = []

for n in sizes:

    X_train, y_train = generate_data(n)

    model = LinearRegression()
    model.fit(X_train, y_train)

    predictions = model.predict(X_test)

    error = mean_squared_error(y_test, predictions)

    errors.append(error)

    print(f"Data size: {n} -> Error: {error:.3f}")

# -----------------------------
# გრაფიკი
# -----------------------------
plt.figure(figsize=(8,5))

plt.plot(sizes, errors, marker='o')

plt.xlabel("მონაცემების რაოდენობა")
plt.ylabel("საშუალო კვადრატული შეცდომა")
plt.title("მონაცემების რაოდენობის მნიშვნელობა ხელოვნური ინტელექტის პროგნოზის სიზუსტეზე")

plt.grid(True)

plt.show()