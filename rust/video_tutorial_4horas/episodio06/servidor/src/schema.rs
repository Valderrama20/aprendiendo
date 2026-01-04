// @generated automatically by Diesel CLI.

diesel::table! {
    CarToRepair (id) {
        id -> Uuid,
        #[max_length = 50]
        modelo -> Bpchar,
        fecha_entrada -> Timestamptz,
        fecha_salida -> Timestamptz,
    }
}

diesel::table! {
    Garage (id) {
        id -> Int8,
        #[max_length = 50]
        name -> Bpchar,
        #[max_length = 150]
        location -> Bpchar,
        capacity -> Int4,
    }
}

diesel::table! {
    WorkingCars (id) {
        id -> Int8,
        assigned_garage -> Int8,
        car_to_repair -> Uuid,
    }
}

diesel::joinable!(WorkingCars -> CarToRepair (car_to_repair));
diesel::joinable!(WorkingCars -> Garage (assigned_garage));

diesel::allow_tables_to_appear_in_same_query!(
    CarToRepair,
    Garage,
    WorkingCars,
);
