import java.io.*;
class Estaturas
  {   
   public static void main(String[] args)     
     {
       float[] estaturas= {1.8f, 1.5f, 2.0f};
       float numMayor = 0.0f;       
       for(int i = 0; i <= 2; i++)
         {
          if (numMayor > estaturas[i])
            {
             numMayor = numMayor;
            }
          else
            {
             numMayor = estaturas[i];
            }
         }      
       System.out.println(numMayor);    
     }
  }