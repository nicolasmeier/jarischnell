import matplotlib.pyplot as plt
import numpy as np
import pandas as pd

df = pd.read_csv("Objekt A.CSV")
dfB = pd.read_csv("Objekt B.CSV")
dfC = pd.read_csv("Objekt C.CSV")
dfD = pd.read_csv("Objekt D.CSV")
dfE = pd.read_csv("Objekt E.CSV")
dfF = pd.read_csv("Objekt F.CSV")
dfG = pd.read_csv("Objekt G.CSV")
dfH = pd.read_csv("Objekt H.CSV")

print()
#quit()


dates = []
daily = []
dailyB = []
dailyC = []
dailyD = []
dailyE = []
dailyF = []
dailyG = []
dailyH = []

for dat in df["Ab-Datum"].drop_duplicates():
    
    firstdf = df[df["Ab-Datum"] == dat]
    firstdfB = dfB[dfB["Ab-Datum"] == dat]
    firstdfC = dfC[dfC["Ab-Datum"] == dat]
    firstdfD = dfD[dfD["Ab-Datum"] == dat]
    firstdfE = dfE[dfE["Ab-Datum"] == dat]
    firstdfF = dfF[dfF["Ab-Datum"] == dat]
    firstdfG = dfG[dfG["Ab-Datum"] == dat]
    firstdfH = dfH[dfH["Ab-Datum"] == dat]

    #data_wirk.append(firstdf["Wirk-Profilwert"].to_numpy())
    #data_blind.append(firstdf["Blind-Profilwert"].to_numpy())

    #plt.plot(firstdf["Wirk-Profilwert"].values)
    dates.append(dat)
    daily.append(np.sum(firstdf["Blind-Profilwert"].values))
    dailyB.append(np.sum(firstdfB["Blind-Profilwert"].values))
    dailyC.append(np.sum(firstdfC["Blind-Profilwert"].values))
    dailyD.append(np.sum(firstdfD["Blind-Profilwert"].values))
    dailyE.append(np.sum(firstdfE["Blind-Profilwert"].values))
    dailyF.append(np.sum(firstdfF["Blind-Profilwert"].values))
    dailyG.append(np.sum(firstdfG["Blind-Profilwert"].values))
    dailyH.append(np.sum(firstdfH["Blind-Profilwert"].values))

    #plt.plot(firstdf["Blind-Profilwert"].values)
    
plt.plot(dates,daily,label="A")
plt.plot(dates,dailyB,label="B")
plt.plot(dates,dailyC,label="C")
plt.plot(dates,dailyD,label="D")
plt.plot(dates,dailyE,label="E")
plt.plot(dates,dailyF,label="F")
plt.plot(dates,dailyG,label="G")
plt.plot(dates,dailyH,label="H")
plt.legend()
#print(data_wirk)
plt.savefig('HousesYear.png')
plt.show()
