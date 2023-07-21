from PIL import Image

def upscale_pixel_art(image_path):
    # Load the original pixel art image
    original_image = Image.open(image_path)
    original_width, original_height = original_image.size

    # Calculate the new dimensions after upscaling by a factor of 3
    new_width = original_width * 3
    new_height = original_height * 3

    # Create a new blank image with the new dimensions
    new_image = Image.new('RGBA', (new_width, new_height), (0, 0, 0, 0))

    # Loop through each pixel in the original image and upscale it
    for y in range(new_height):
        for x in range(new_width):
            if x % 3 == 0 and y % 3 == 0:
                # Copy the corresponding pixel from the original image to the new image
                original_pixel = original_image.getpixel((x // 3, y // 3))
                new_image.putpixel((x, y), original_pixel)
            else: 
                # Make transparent
                new_image.putpixel((x, y), (0, 0, 0, 0))

    # Save the upscaled image
    new_image.save("upscaled_pixel_art.png")

if __name__ == "__main__":
    image_path = "rumia.png"
    upscale_pixel_art(image_path)
