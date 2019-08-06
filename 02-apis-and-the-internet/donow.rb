
# For each of the following examples, write two methods that solve the 
# problem:  One that uses `.each` and one that uses one of the higher level 
# iterator methods

# Remember:

# map/collect:  Returns an array where each value of the original array 
# corresponds to an element in the new array

# find/detect:  Returns the first element for which the statement in the block
# evaluates as True

# select/find_all:  Returns an array of _all_ elements for which the statement in
# the block evaluates as True

nums = (1..20).to_a #creates an array of all numbers from 1-20
# print nums
# 1.  Create an array of numbers where each new number is three times as big as
# its original number (e.g., [3, 6, 9])

def times_three(nums)
    answer = []
    nums.each do |num|
        answer << num * 3
    end
    return answer
end

def times_three_map(nums)
    nums.map do |num|
        num * 3
    end
end

# print times_three_map(nums)

# 2.  Find the first number that is divisible by 7

def divisible_by_seven(nums)
    nums.each do |num|
        if num % 7 == 0
            return num
        end
    end
end

# print divisible_by_seven(nums)

def find_divisible_by_seven(nums)
    answer = nums.find do |number|
        number % 7 == 0
    end
    return answer
end

returned_answer = find_divisible_by_seven(nums)

# 3.  Find all numbers that are divisible by 7

def find_all_divisible_by_seven(nums)
    nums.select do |number|
        number % 7 == 0
    end
end

# print find_all_divisible_by_seven(nums)

# 4.  Find the first number that is divisible by 7 AND greater than 10

def find_big_divisible_by_seven(nums)
    # nums.find do |num|
    #     num % 7 == 0 && num > 10
    # end
    find_all_divisible_by_seven(nums).find do |num|
        num > 10
    end
end

# print find_big_divisible_by_seven(nums)

# Bonus:


# 5.  Create an array of the squares (the number times itself) of all numbers
# that are divisible by 7

def multiple_seven_squares(nums)
    nums.select do |num|
        num % 7 == 0
    end.map {|num| num ** 2}
end

print multiple_seven_squares(nums)