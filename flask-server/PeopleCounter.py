import threading

TIME_SLOT_LENGTH=1 #length of each time slot in seconds

class NumOfPeople:
    def __init__(self, time_range):
        # time_range: number of TIME_SLOT_LENGTH 
        self.time_range=time_range
        self.timeslots=[0 for i in range(time_range)]
        self.total=0
        self.cur_front=0
        self.start()#start counting after success init

    def refresh(self):
        t1=threading.Timer(TIME_SLOT_LENGTH,self.refresh)
        t1.start()
        self.cur_front=(self.cur_front+1)%(self.time_range)
        self.total-=self.timeslots[self.cur_front]
        self.timeslots[self.cur_front]=0
        print(self.cur_front)

    def addone(self):
        self.timeslots[self.cur_front]+=1
        self.total+=1

    def start(self):

        t1=threading.Timer(TIME_SLOT_LENGTH,self.refresh)

        t1.start()

if __name__=="__main__":
    a=NumOfPeople(20)
