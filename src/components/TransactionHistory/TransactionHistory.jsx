import css from "./TransactionHistory.module.css";
import clsx from "clsx";

const TransactionHistory = ({ items }) => {
  return (
    <table className={clsx(css, css.table)}>
      <thead>
        <tr>
          <th className={clsx(css, css.th)}>Type</th>
          <th className={clsx(css, css.th)}>Amount</th>
          <th className={clsx(css, css.th)}>Currency</th>
        </tr>
      </thead>
      <tbody>
        {items.map(({ id, type, amount, currency }) => (
          <tr key={id}>
            <td className={clsx(css, css.td)}>{type}</td>
            <td className={clsx(css, css.td)}>{amount}</td>
            <td className={clsx(css, css.td)}>{currency}</td>
          </tr>
        ))}
      </tbody>
    </table>
  );
};

export default TransactionHistory;
