export type Tab = 'Dashboard' | 'Calendar' | 'History' | 'Appointment Setting';
export type Visit = { id: number; patient: string; doctor: string; reason: string; date: string; time: string; status: 'Completed' | 'Cancelled' | 'Confirmed' | 'Waiting' | 'In Progress'; notes: string };
export const initialVisits: Visit[] = [
  { id: 1, patient: 'B. John Doe', doctor: 'Dr. Sarah', reason: 'Hypertension Follow-up', date: 'Oct 10, 2026', time: '10:00 AM', status: 'Completed', notes: 'Meds refilled' },
  { id: 2, patient: 'S. Jane Smith', doctor: 'Dr. Patel', reason: 'General Checkup', date: 'Oct 10, 2026', time: '02:30 PM', status: 'Completed', notes: 'Lab results review' },
  { id: 3, patient: 'S. Jane Smith', doctor: 'Dr. Patel', reason: 'General Checkup', date: 'Oct 09, 2026', time: '02:30 PM', status: 'Completed', notes: 'Meds refilled' },
  { id: 4, patient: 'S. Jane Smith', doctor: 'Dr. Patel', reason: 'General Checkup', date: 'Oct 09, 2026', time: '02:30 PM', status: 'Completed', notes: 'Meds refilled' },
  { id: 5, patient: 'S. Jane Smith', doctor: 'Dr. Patel', reason: 'General Checkup', date: 'Oct 09, 2026', time: '02:30 PM', status: 'Completed', notes: 'Lab results review' },
  { id: 6, patient: 'B. John Doe', doctor: 'Dr. Patel', reason: 'General Checkup', date: 'Oct 09, 2026', time: '02:30 PM', status: 'Cancelled', notes: 'Meds refilled' },
];
export type Booking = { id: number; patient: string; doctor: string; type: string; time: string; date: string; notes: string };
export const starterBookings: Booking[] = [
  { id: 101, patient: 'B. John Doe', doctor: 'Dr. Sarah', type: 'General Checkup', time: '9:00 AM', date: '2026-10-10', notes: '' },
  { id: 102, patient: 'S. Jane Smith', doctor: 'Dr. Patel', type: 'Follow-up', time: '10:15 AM', date: '2026-10-10', notes: '' },
  { id: 103, patient: 'Jane Smith', doctor: 'Dr. Sarah', type: 'Follow-up', time: '11:30 AM', date: '2026-10-10', notes: '' },
  { id: 104, patient: 'John Doe', doctor: 'Dr. Patel', type: 'General Checkup', time: '2:00 PM', date: '2026-10-10', notes: '' },
];
export const slots = ['9:00 AM', '10:15 AM', '11:30 AM', '12:30 PM', '1:30 PM', '2:00 PM', '3:00 PM', '4:00 PM'];
