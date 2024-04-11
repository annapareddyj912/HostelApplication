package com.hostel.hostelPortal.model;

import java.awt.Font;

import com.hostel.hostelPortal.service.UserService;
import com.lowagie.text.FontFactory;
import com.lowagie.text.Phrase;
import com.lowagie.text.pdf.PdfPCell;
import com.lowagie.text.pdf.PdfPTable;


import java.awt.Color;
import java.io.IOException;
import java.util.List;

import javax.servlet.http.HttpServletResponse;

import com.lowagie.text.*;
import com.lowagie.text.pdf.*;

import java.awt.*;

public class pdfexporter
{
    Long userid;

    private UserService userService;

    public Long getUserid() {
        return userid;
    }

    public void setUserid(Long userid) {
        this.userid = userid;
    }

    public pdfexporter(Long userid, UserService userService) {
        this.userService = userService;
        this.userid = userid;
    }

    private void writeTableHeader(PdfPTable table)
    {
        PdfPCell cell = new PdfPCell();

        cell.setBackgroundColor(Color.BLUE);
        cell.setPadding(5);


        cell.setPhrase(new Phrase("User ID"));

        table.addCell(cell);

        cell.setPhrase(new Phrase("Mess_fees"));
        table.addCell(cell);

        cell.setPhrase(new Phrase("Hostel_fee"));
        table.addCell(cell);


    }

    private void writeTableData(PdfPTable table)
    {


            stud_fees sf=this.userService.showFees(userid);

            table.addCell(String.valueOf(sf.id));
            table.addCell(String.valueOf(sf.mess_fees));
            table.addCell(String.valueOf(sf.hostel_fees));

    }

    public void export(HttpServletResponse response) throws DocumentException, IOException
    {
        Document document = new Document(PageSize.A4);
        PdfWriter.getInstance(document, response.getOutputStream());

        document.open();


        Paragraph p = new Paragraph("Bill details");
        p.setAlignment(Paragraph.ALIGN_CENTER);

        document.add(p);

        PdfPTable table = new PdfPTable(3);
        table.setWidthPercentage(100f);
        table.setWidths(new float[] {1.5f, 3.5f, 3.5f});
        table.setSpacingBefore(10);

        writeTableHeader(table);
        writeTableData(table);

        document.add(table);

        document.close();

    }
}