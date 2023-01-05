import { BsFillPersonFill } from 'react-icons/bs';
import { AiOutlineMail } from 'react-icons/ai';
import { TbAddressBook } from 'react-icons/tb';
import { MdDateRange } from 'react-icons/md';
import { MdOutlineAccountBalanceWallet } from 'react-icons/md';

export default function MainBody({ users }) {
  console.log(users)

  return (
    <div
      className="d-flex gap-4 flex-wrap mt-5 justify-content-around"
      style={{ width: "65vw" }}
    >
      {
        users.map((e) => {
          return (
            <div className="card p-3" style={{ width: "40%" }}>
              <p className='d-flex gap-2 align-items-center m-0'><BsFillPersonFill />{e.first} {e.last}</p>
              <p className='d-flex gap-2 align-items-center m-0 overflow-hidden'><AiOutlineMail />{e.email}</p>
              <p className='d-flex gap-2 align-items-center m-0'><TbAddressBook />{e.address}</p>
              <p className='d-flex gap-2 align-items-center m-0'><MdDateRange />{e.created}</p>
              <p className='d-flex gap-2 align-items-center m-0'><MdOutlineAccountBalanceWallet />{e.balance}</p>
            </div>
          )
        })
      }
      Энэ хэсэгт хэрэглэгч тус бүрийн card component - ийг дуудаарай.
    </div >
  );
}
