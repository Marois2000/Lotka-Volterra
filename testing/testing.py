import numpy as np
import matplotlib as plt
from matplotlib.pyplot import subplots
from matplotlib.pyplot import show
from scipy.integrate import odeint

y0 = [3000, 186988800] # [moose, ticks]
t = np.linspace(0, 120)

#params
mooseR = .1
tickR = .5
mooseA = .00001
tickA = 3
mooseK = 10000
tickK = 9349440000




params = [mooseR, tickR, mooseA, tickA, mooseK, tickK]



def simulation(variables, t, parameters):
    
    #moose population
    x1 = variables[0]

    #tick population
    x2 = variables[1]

    if t % 12 == 0 and t % 12 == 1 and t % 12 == 2:
        parameters[1] = -0.5
    else:
        parameters[1] = 0.5


    #parameters in order as before
    r1 = parameters[0]
    r2 = parameters[1]
    a1 = parameters[2]
    a2 = parameters[3]
    k1 = parameters[4]
    k2 = parameters[5]

    #differential equations for each species
    dx1dt = r1 * x1 * (1 - (x1 + a1 * x2)/k1) #moose
    dx2dt = r2 * x2 * (1 - (x2 + a2 * x2)/k2) #ticks

    return([dx1dt, dx2dt])


y = odeint(simulation, y0, t, args=(params,))

print(y)

f,(ax1, ax2) = subplots(2)
line1, = ax1.plot(t, y[:,0], color="b")
line2, = ax2.plot(t, y[:,1], color="r")

ax1.set_ylabel("Moose Population")
ax2.set_ylabel("Tick Population")
ax2.set_xlabel("Time")

show()