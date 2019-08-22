
class PalindromeChecker

    def is_palindrome?(word)
        if !(word.is_a?(String))
            raise ArgumentError
        end

        word = word.gsub(/[^a-z0-9]/i, "").downcase
        if word.length <= 1
            return true
        else
            if word[0] == word[-1]
                return is_palindrome?(word[1...-1])
            else
                return false
            end
        end
    end

    def divide_by(dividend, divisor)
        begin
            return dividend / divisor
        rescue ZeroDivisionError => err 
            puts err 
            return "You can't divide by zero"
        end
    end
end




# p = PalindromeChecker.new
# puts p.is_palindrome?(7)