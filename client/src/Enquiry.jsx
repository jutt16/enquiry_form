import React from "react";
import { Button, Checkbox, Label, TextInput, Textarea } from "flowbite-react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeadCell,
  TableRow,
} from "flowbite-react";

export default function Enquiry() {
  let saveEnquiry = (e) => {
    e.preventDefault();
    // alert("Enquiry Saved Successfully!");
    let formData = new FormData(e.target);
    let data = Object.fromEntries(formData.entries());
    console.log(data);
  };
  return (
    <div>
      <h1 className="text-[40px] text-center py-6 font-bold">User Enquiry</h1>
      <div className="grid grid-cols-[30%_auto] gap-10">
        <div className="bg-gray-200 p-4 items-start">
          <h2 className="text-[20px] font-bold text-center">Enquiry Form</h2>
          <form action="" onSubmit={saveEnquiry} className="max-w-md">
            <div className="py-3">
              <Label htmlFor="name">Your Name</Label>
              <TextInput
                id="name"
                name="name"
                type="text"
                placeholder="Enter Your Name"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="email">Your Email</Label>
              <TextInput
                id="email"
                name="email"
                type="email"
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="phone">Your Phone</Label>
              <TextInput
                id="phone"
                name="phone"
                type="phone"
                placeholder="Enter Your Phone"
                required
              />
            </div>
            <div className="py-3">
              <Label htmlFor="message">Your Message</Label>
              <Textarea
                id="message"
                name="message"
                placeholder="Leave a comment..."
                required
                rows={4}
              />
            </div>
            <div className="py-3">
              <Button
                type="submit"
                className="w-[100%] p-2 bg-blue-600 text-white justify-center"
              >
                Save
              </Button>
            </div>
          </form>
        </div>
        <div className="bg-gray-200 p-4 items-start">
          <h2 className="text-[20px] font-bold text-center mb-4">Enquiry List</h2>
          <div className="overflow-x-auto bg-white">
            <Table>
              <TableHead>
                <TableRow className="bg-gray-200">
                  <TableHeadCell>SR No.</TableHeadCell>
                  <TableHeadCell>Name</TableHeadCell>
                  <TableHeadCell>Email</TableHeadCell>
                  <TableHeadCell>Phone</TableHeadCell>
                  <TableHeadCell>Message</TableHeadCell>
                  <TableHeadCell>Delete</TableHeadCell>
                  <TableHeadCell>Edit</TableHeadCell>
                </TableRow>
              </TableHead>
              <TableBody>
                <TableRow>
                  <TableCell>2</TableCell>
                  <TableCell>Jane Doe</TableCell>
                  <TableCell>email@email.com</TableCell>
                  <TableCell>1234567890</TableCell>
                  <TableCell>Test message</TableCell>
                  <TableCell>
                    <a href="" className="text-blue-600">
                      Delete
                    </a>
                  </TableCell>
                  <TableCell>
                    <a href="" className="text-blue-600">
                      Edit
                    </a>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </div>
        </div>
      </div>
    </div>
  );
}
