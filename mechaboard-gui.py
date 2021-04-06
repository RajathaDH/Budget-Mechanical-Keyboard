import threading
import keyboard
from playsound import playsound
#import tkinter

def play_key_down():
    #t = threading.Thread(target=lambda: playsound('sounds/down1.mp3'))
    #t.start()

    playsound('sounds/down-1.mp3')

def play_key_up():
    playsound('sounds/up-1.mp3')

def key_pressed(e):
    if e.event_type == 'down':
        t = threading.Thread(target=play_key_down)
        t.start()
    elif e.event_type == 'up':
        t = threading.Thread(target=play_key_up)
        t.start()

keyboard.hook(key_pressed)
keyboard.wait('shift+q')

""" def enable():
    t = threading.Thread(target=play_key_down)
    t.start() """

#window = tkinter.Tk()
#button = tkinter.Button(window, text='Enable', command=enable)
##button.pack()

#window.mainloop()