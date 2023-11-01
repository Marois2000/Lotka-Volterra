import numpy as np

# Define the system of ODEs as a list of functions [dy1/dt, dy2/dt, ...]
def system_of_odes(t, y):
    dy1dt = 0.1 * y[0] * (1 - (y[0] + .00001 * y[1])/10000)  # Example ODE 1
    dy2dt = 0.5 * y[1] * (1 - (y[1] + 3 * y[0])/9349440000)  # Example ODE 2

    return [dy1dt, dy2dt]

# Define the time interval and step size
t0 = 0
t_final = 12
h = .1  # Step size

# Initial conditions for the system
y0 = [3000, 186988800]  # Initial values for y1 and y2

# Create arrays to store time and solution values
t_values = [t0]
y_values = [y0]

# Perform the Euler method in a for loop
t = t0
y = y0
while t < t_final:
    k1 = np.array(system_of_odes(t, y))
    y_next = y + h * k1  # Euler's method update
    t += h
    y = y_next

    # Append the current time and solution values to the arrays
    t_values.append(t)
    y_values.append(y.tolist())

# Print the results
for t, (y1, y2) in zip(t_values, y_values):
    print(f"t = {t}, y1 = {y1}, y2 = {y2}")
