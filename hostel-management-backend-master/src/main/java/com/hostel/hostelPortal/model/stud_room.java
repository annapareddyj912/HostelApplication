package com.hostel.hostelPortal.model;

import javax.persistence.Entity;
import javax.persistence.Id;

@Entity
public class stud_room
{
    @Id
    Long id;
    Long room_no;

    public stud_room(Long id, Long room_no)
    {
        this.id = id;
        this.room_no = room_no;
    }

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public Long getRoom_no() {
        return room_no;
    }

    public void setRoom_no(Long room_no) {
        this.room_no = room_no;
    }

    public stud_room() {
    }
}
