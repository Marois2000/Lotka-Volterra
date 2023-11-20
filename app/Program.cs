using System;



namespace unity
{
    class Program
    {

        public Program() {

        }

        //Parameters
        static float mooseR = 0.001f;
        static float tickR = 0.5f;
        static float mooseA = 0.000027f;
        static float tickA = 15f;
        static int mooseK = 10000;
        static long tickK = 9349440000;

        //Time Stuff
        static int years = 100;
        static float t0 = 0f;
        static float h = 0.01f; //Step size
        static float tFinal = 3.65f * years;
        static int dayCount = 0;
        static int monthCount = 0;

        static float[] y0 = {3200f, 275000000f};

        static List<float> t_values = new List<float>();
        static List<float[]> y_values = new List<float[]>();

        static float t = t0;
        static float[] y = y0;

        public float[] systemOfODEs(float t, float[] y, int month, bool longWinter) {
            float dy1dt = 0f;
            float dy2dt = 0f;

            if(month % 12 == 11 || month % 12 == 12) {
                dy1dt = y[0] * (1 - (y[0] + mooseA * y[1]) / mooseK);
            } else {
                dy1dt = mooseR * y[0] * (1 - (y[0] + mooseA * y[1]) / mooseK);
            }

            if(longWinter) {
                if(month % 12 == 10 || month % 12 == 11 || month % 12 == 12 || month % 12 == 9) {
                    dy2dt = -tickR*3 * y[1] * (1 - (y[1] + tickA * y[0]) / tickK);
                } else {
                    dy2dt = tickR * y[1] * (1 - (y[1] + tickA * y[0]) / tickK);
                }
            } else {
                if(month % 12 == 10 || month % 12 == 11 || month % 12 == 12 || month % 12 == 9) {
                    dy2dt = -tickR*4.93f * y[1] * (1 - (y[1] + tickA * y[0]) / tickK);
                } else {
                    dy2dt = tickR * y[1] * (1 - (y[1] + tickA * y[0]) / tickK);
                }
            }

            return [dy1dt, dy2dt];
        }

        static void Main(string[] args) 
        {
            Program pro = new Program();
            t_values.Add(t0);
            y_values.Add(y0);

            while (t < tFinal) {
                float[] k1 = pro.systemOfODEs(t, y, monthCount, true);
                float[] yNext = {y[0] + h * k1[0], y[1] + h * k1[1]};
                t += h;
                dayCount += 1;
                y = yNext;

                if(dayCount % 30 == 0) {
                    t_values.Add(monthCount);
                    y_values.Add(y);
                    monthCount += 1;
                }
            }

            foreach (float[] value in y_values)
            {
                Console.WriteLine("Moose: " + value[0] + " Tick: " + value[1]);
            }
        }
    }
}