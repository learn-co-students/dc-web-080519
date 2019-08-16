class CreatePatientDoctorsTable < ActiveRecord::Migration[5.2]
  def change
    create_table :patient_doctors do |t|
      t.integer :patient_id
      t.integer :doctor_id
    end 
  end
end
