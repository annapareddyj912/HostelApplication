package com.hostel.hostelPortal.model;

public class fees_month
{
   Float mess_fees;
   Float hostel_fees;

    public fees_month(Float mess_fees, Float hostel_fees)
    {
        this.mess_fees = mess_fees;
        this.hostel_fees = hostel_fees;
    }

    public Float getMess_fees() {
        return mess_fees;
    }

    public void setMess_fees(Float mess_fees) {
        this.mess_fees = mess_fees;
    }

    public Float getHostel_fees() {
        return hostel_fees;
    }

    public void setHostel_fees(Float hostel_fees) {
        this.hostel_fees = hostel_fees;
    }

    public fees_month() {
    }
}
