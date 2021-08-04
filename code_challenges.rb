# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN ✌️

# --------------------1) Create a method that takes in an array of words and a letter and returns all the words that contain that particular letter.

beverages_array = ['coffee', 'tea', 'juice', 'water', 'soda water']
letter_o = 'o'
# Expected output: ['coffee', 'soda water']
letter_t = 't'
# Expected output: ['tea', 'water', 'soda water']
def letter_included (arr, letter)
    arr.select do |value|
        value.include?letter
    end
end

# refactor with arr.any? { |letter| s.include? letter } # Will return true if any element is present

p letter_included beverages_array, letter_o
p letter_included beverages_array, letter_t


# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'

def remove_vowels str
    str.delete "aeiouAEIOU" #delete is a string method that will remove all matching characters!
end

p remove_vowels album1
p remove_vowels album2
p remove_vowels album3

# --------------------3a) Create a class called Bike that is initialized with a model, wheels, and current_speed. The default number of wheels is 2. The current_speed should start at 0. Create a get_info method that returns a sentence with all the data from the bike object.

# Expected output example: 'The Trek bike has 2 wheels and is going 0 mph.'

class Bike
    attr_accessor :model, :wheels, :current_speed

    def initialize(model)
        @model = model
        @wheels = 2
        @current_speed = 0
    end

    def get_info
        "The #{@model} has #{@wheels} wheels and is traveling at #{@current_speed} mph"
    end

    def pedal_faster num
        @current_speed += num
    end

    def brake num
        if current_speed >= num
            @current_speed = @current_speed - num
        else
            @current_speed = 0
        end
    end

end

my_bike = Bike.new 'BMW'
p my_bike
p my_bike.get_info

# -------------------3b) Add the ability to pedal faster and brake. The pedal_faster method should increase the speed. The brake method should decrease the speed. The bike cannot go negative speeds.

# Expected output example: my_bike.pedal_faster 10 => 10
# Expected output example: my_bike.brake 15 => 0

p my_bike.current_speed
my_bike.pedal_faster 20
p my_bike.current_speed
my_bike.brake 5
p my_bike.current_speed
my_bike.brake 20
p my_bike.current_speed

