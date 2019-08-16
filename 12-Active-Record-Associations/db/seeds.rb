# Remove old data
Doctor.destroy_all
Hospital.destroy_all
Patient.destroy_all
PatientDoctor.destroy_all

#Doctors Seed data
dr_strange = Doctor.find_or_create_by(name: "Strange", speciality: "magic")
dr_pepper = Doctor.find_or_create_by(name: "Pepper", speciality: "sugar")
dr_phil = Doctor.find_or_create_by(name: "Phil", speciality: "emotions")

#Doctors Seed data
comics_hospital = Hospital.find_or_create_by(name: "Comics Hospital", location:"DC")
tv_hospital = Hospital.find_or_create_by(name: "TV Land", location:"In your tv")

#Patients Seed data 
jc = Patient.find_or_create_by(name: "JC", birthday: "Apr 31")
shannon = Patient.find_or_create_by(name: "Shannon", birthday: "Apr 31")

#be able to relate a patient with a doctor

PatientDoctor.find_or_create_by(patient_id: jc.id, doctor_id: dr_phil.id)
PatientDoctor.find_or_create_by(patient_id: shannon.id, doctor_id: dr_phil.id)
PatientDoctor.find_or_create_by(patient_id: shannon.id, doctor_id: dr_pepper.id)
PatientDoctor.find_or_create_by(patient_id: shannon.id, doctor_id: dr_strange.id)

dr_strange.hospital = comics_hospital
dr_strange.save
dr_phil.hospital = tv_hospital
dr_phil.save 

binding.pry
0