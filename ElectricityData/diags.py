import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

path = "ElectricityData/csv/"
pathpic = "ElectricityData/png/Blind-"

df = pd.read_csv(path+"Objekt A.CSV")
dfB = pd.read_csv(path+"Objekt B.CSV")
dfC = pd.read_csv(path+"Objekt C.CSV")
dfD = pd.read_csv(path+"Objekt D.CSV")
dfE = pd.read_csv(path+"Objekt E.CSV")
dfF = pd.read_csv(path+"Objekt F.CSV")
dfG = pd.read_csv(path+"Objekt G.CSV")
dfH = pd.read_csv(path+"Objekt H.CSV")

print()

dates = []
daily = []
'''
dailyB = []
dailyC = []
dailyD = []
dailyE = []
dailyF = []
dailyG = []
dailyH = []
'''

for dat in df["Ab-Datum"].drop_duplicates():
    
    firstdf = df[df["Ab-Datum"] == dat]
    '''
    firstdfB = dfB[dfB["Ab-Datum"] == dat]
    firstdfC = dfC[dfC["Ab-Datum"] == dat]
    firstdfD = dfD[dfD["Ab-Datum"] == dat]
    firstdfE = dfE[dfE["Ab-Datum"] == dat]
    firstdfF = dfF[dfF["Ab-Datum"] == dat]
    firstdfG = dfG[dfG["Ab-Datum"] == dat]
    firstdfH = dfH[dfH["Ab-Datum"] == dat]
    '''

    #data_wirk.append(firstdf["Wirk-Profilwert"].to_numpy())
    #data_blind.append(firstdf["Blind-Profilwert"].to_numpy())

    #plt.plot(firstdf["Wirk-Profilwert"].values)
    dates.append(dat)
    daily.append(np.sum(firstdf["Wirk-Profilwert"].values))
    '''
    dailyB.append(np.sum(firstdfB["Wirk-Profilwert"].values))
    dailyC.append(np.sum(firstdfC["Wirk-Profilwert"].values))
    dailyD.append(np.sum(firstdfD["Wirk-Profilwert"].values))
    dailyE.append(np.sum(firstdfE["Wirk-Profilwert"].values))
    dailyF.append(np.sum(firstdfF["Wirk-Profilwert"].values))
    dailyG.append(np.sum(firstdfG["Wirk-Profilwert"].values))
    dailyH.append(np.sum(firstdfH["Wirk-Profilwert"].values))
    '''

    #plt.plot(firstdf["Blind-Profilwert"].values)
    
print(f"Label = {[dates]}")
print(f"Data = {[np.around(daily,decimals=2)]}")   
    
plt.plot(dates,daily,label="A")
'''
plt.plot(dates,dailyB,label="B")
plt.plot(dates,dailyC,label="C")
plt.plot(dates,dailyD,label="D")
plt.plot(dates,dailyE,label="E")
plt.plot(dates,dailyF,label="F")
plt.plot(dates,dailyG,label="G")
plt.plot(dates,dailyH,label="H")
'''
plt.legend()
#print(data_wirk)
plt.savefig(pathpic+'HousesYear.png')
plt.show()

quit()
plt.plot(dates,daily)
plt.savefig(pathpic+'AYear.png')
plt.show()


plt.plot(dates,dailyB)
plt.savefig(pathpic+'BYear.png')
plt.show()

plt.plot(dates,dailyC)
plt.savefig(pathpic+'CYear.png')
plt.show()

plt.plot(dates,dailyD)
plt.savefig(pathpic+'DYear.png')
plt.show()

plt.plot(dates,dailyE)
plt.savefig(pathpic+'EYear.png')
plt.show()

plt.plot(dates,dailyF)
plt.savefig(pathpic+'FYear.png')
plt.show()

plt.plot(dates,dailyG)
plt.savefig(pathpic+'GYear.png')
plt.show()

plt.plot(dates,dailyH)
plt.savefig(pathpic+'HYear.png')
plt.show()

