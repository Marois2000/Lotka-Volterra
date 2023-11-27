import numpy as np
import math
import matplotlib as plt
from matplotlib.pyplot import subplots
from matplotlib.pyplot import show

# params (Data is fit for 1994-2016)
mooseR = 0.001
tickR = 0.5
mooseA = 0.000027
tickA = 15
mooseK = 10000
tickK = 9349440000


# Define the system of ODEs as a list of functions [dy1/dt, dy2/dt, ...]
def system_of_odes(t, y, month, longWinter):
    if month % 12 == 11 or month % 12 == 0:
        dy1dt = y[0] * (1 - (y[0] + mooseA * y[1]) / mooseK)  # Example ODE 1
    else:
        dy1dt = mooseR * y[0] * (1 - (y[0] + mooseA * y[1]) / mooseK)  # Example ODE 1

    if longWinter:
        if month % 12 == 10 or month % 12 == 11 or month % 12 == 0 or month % 12 == 9:
            dy2dt = (
                -tickR * 2 * y[1] * (1 - (y[1] + tickA * y[0]) / tickK)
            )  # Example ODE 2
        else:
            dy2dt = tickR * y[1] * (1 - (y[1] + tickA * y[0]) / tickK)  # Example ODE 2
    else:
        if month % 12 == 10 or month % 12 == 11 or month % 12 == 0:
            dy2dt = (
                -tickR * 2.89 * y[1] * (1 - (y[1] + tickA * y[0]) / tickK)
            )  # Example ODE 2
        else:
            dy2dt = tickR * y[1] * (1 - (y[1] + tickA * y[0]) / tickK)  # Example ODE 2

    return [dy1dt, dy2dt]


# Define the time interval and step size
years = 10
t0 = 0
h = 0.01  # Step size
t_final = 3.65 * years
dayCount = 0
monthCount = 0

# Initial conditions for the system
# Values are fit for 1994-2016
y0 = [3200, 275000000]  # Initial values for y1 and y2

# Create arrays to store time and solution values
t_values = [t0]
y_values = [y0]

# Perform the Euler method in a for loop
t = t0
y = y0
while t < t_final:
    k1 = np.array(system_of_odes(t, y, monthCount, True))
    y_next = y + h * k1  # Euler's method update
    t += h
    dayCount += 1
    y = y_next

    # Append the current time and solution values to the arrays
    if dayCount % 30 == 0:
        t_values.append(monthCount)
        y_values.append(y.tolist())
        monthCount += 1

# Print the results
for t, (y1, y2) in zip(t_values, y_values):
    print(f"Moose = {np.round(y1).astype(int)}, Ticks = {y2}")

y_values = np.array(y_values)
y1_values = y_values[:, 0]
y2_values = y_values[:, 1]

f, (ax1, ax2) = subplots(2)
(line1,) = ax1.plot(t_values, y1_values, color="b")
(line2,) = ax2.plot(t_values, y2_values, color="r")

ax1.set_title("The Next 100 years\nLong Winters")
ax1.set_ylabel("Moose Population")
ax2.set_ylabel("Tick Population")
ax2.set_xlabel("Months")

show()
