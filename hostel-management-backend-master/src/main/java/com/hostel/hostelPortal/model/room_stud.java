package com.hostel.hostelPortal.model;

import org.springframework.format.annotation.DateTimeFormat;

import javax.persistence.Entity;
import javax.persistence.Id;
import java.util.Date;

@Entity
public class room_stud
{
    @Id
    Long room;
    Long stud;
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    Date start;
    @DateTimeFormat(pattern = "yyyy-mm-dd")
    Date end;

    public Long getRoom() {
        return room;
    }

    public void setRoom(Long room) {
        this.room = room;
    }

    public Long getStud() {
        return stud;
    }

    public void setStud(Long stud) {
        this.stud = stud;
    }

    public Date getStart() {
        return start;
    }

    public void setStart(Date start) {
        this.start = start;
    }

    public Date getEnd() {
        return end;
    }

    public void setEnd(Date end) {
        this.end = end;
    }

    public room_stud(Long room, Long stud, Date start, Date end) {
        this.room = room;
        this.stud = stud;
        this.start = start;
        this.end = end;
    }

    public room_stud() {
    }
}
