using System;
using System.Collections.Generic;
using System.Numerics;
using System.Windows.Markup;

class Program
{
    public Program() { }

    // Parameters (Data is fit for 1994-2016)
    double mooseR = 0.001;
    double tickR = 0.5;
    double mooseA = 0.000027;
    double tickA = 15;
    double mooseK = 10000;
    double tickK = 9349440000;

    // Define the system of ODEs as a function
    List<double> SystemOfODEs(List<double> y, int month, bool longWinter){
        double dy1dt, dy2dt;

        if (month % 12 == 11 || month % 12 == 0){
            dy1dt = mooseR * y[0] * (1 - (y[0] + mooseA * y[1]) / mooseK); // Moose Equation with repopulation
        } else {
            dy1dt = y[0] * (1 - (y[0] + mooseA * y[1]) / mooseK); // Moose Equation with no repopulation
        }

        if (longWinter) {
            if (month % 12 == 10 || month % 12 == 11 || month % 12 == 0 || month % 12 == 9) {
                dy2dt = -tickR * 2 * y[1] * (1 - (y[1] + tickA * y[0]) / tickK);  // Tick Equation with long winter death rate
            } else {
                dy2dt = tickR * y[1] * (1 - (y[1] + tickA * y[0]) / tickK); // Normal Tick Equation
            }
        } else {
            if (month % 12 == 10 || month % 12 == 11 || month % 12 == 0) {
                dy2dt = -tickR * 2.89 * y[1] * (1 - (y[1] + tickA * y[0]) / tickK);  // Tick Equation with short winter death rate
            } else {
                dy2dt = tickR * y[1] * (1 - (y[1] + tickA * y[0]) / tickK); // Normal Tick Equation
            }
        }

        return new List<double> { dy1dt, dy2dt };
    }

    static void Main()
    {
        // Define the time interval and step size
        int years = 30;
        double t0 = 0;
        double h = 0.01;  // Step size
        double t_final = 3.65 * years;
        int dayCount = 0;
        int monthCount = 0;

        // Initial conditions for the system
        // Values are fit for 1994-2016
        List<double> y0 = new List<double> { 3200, 275000000 };  // Initial values for y1 and y2

        // Create lists to store time and solution values
        List<double> t_values = new List<double> { t0 };
        List<List<double>> y_values = new List<List<double>> { y0 };

        // Perform the Euler method in a loop
        double t = t0;
        List<double> y = new List<double>(y0);

        List<List<double>> vals = new List<List<double>>();

        while (t < t_final)
        {
            List<double> k1 = new List<double>(new Program().SystemOfODEs(y, monthCount, true));
            List<double> y_next = new List<double> { y[0] + h * k1[0], y[1] + h * k1[1] };  // Euler's method update
            t += h;
            dayCount++;

            y = new List<double>(y_next);

            // Append the current time and solution values to the lists
            if (dayCount % 30 == 0)
            {
                t_values.Add(monthCount);
                y_values.Add(new List<double>(y));
                monthCount++;
                List<double> turn = new List<double>();
                turn.Add(y[0]);
                turn.Add(y[1]);
                turn.Add(monthCount);
                vals.Add(turn);
            }
        }

        foreach (List<double> values in vals)
        {
            Console.WriteLine("Month: " + values[2]  +" Moose: " + Math.Floor(values[0]) + " Tick: " + Math.Floor(values[1]));
        }

        
    }
}



