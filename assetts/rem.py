from PIL import Image

img=Image.open('profile 1.png')

background_colour=(63,72,204)

pixels=img.load()
for x in range(img.width):
    for y in range(img.height):
        if pixels[x,y] ==background_colour:
            pixels[x,y]=(0,0,0)

img.save('output.png')