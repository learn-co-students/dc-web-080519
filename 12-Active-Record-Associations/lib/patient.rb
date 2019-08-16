class Patient < ActiveRecord::Base
    has_many :patient_doctors
    has_many :doctors, through: :patient_doctors

    def hospitals
        self.doctors.map {|doctor|
            doctor.hospital
        }.compact
    end 

    def doctors
        puts "testing my own method"
        PatientDoctor.all.select{|pd|
            pd.patient == self
        }.map{|pd|
            pd.doctor
        }
    end 
end 