import { useFetchData } from '../../hooks/useFetchData'
import style from './Table.module.css'

export default function Table () {
  const { data, error } = useFetchData('/api/admin/users')

  return (
    <div className={style.table}>
      {
        error && <div>{error}</div>
      }
      {
        data && data.rows
          .map((item, index) => {
            return (
                // Ponemos el atributo key con el id del item para que React pueda identificar cada elemento de la lista.
              <div className={style.tableRow} key={item.id}>
                <div className={style.tableButtons}>
                  <div className={`${style.tableButton} ${style.editButton}`}>
                    <svg viewBox='0 0 24 24'>
                      <path fill='currentColor' d='M20.71,7.04C21.1,6.65 21.1,6 20.71,5.63L18.37,3.29C18,2.9 17.35,2.9 16.96,3.29L15.12,5.12L18.87,8.87M3,17.25V21H6.75L17.81,9.93L14.06,6.18L3,17.25Z' />
                    </svg>
                  </div>
                  <div className={`${style.tableButton} ${style.removeButton}`}>
                    <svg viewBox='0 0 24 24'>
                      <path d='M19,4H15.5L14.5,3H9.5L8.5,4H5V6H19M6,19A2,2 0 0,0 8,21H16A2,2 0 0,0 18,19V7H6V19Z' />
                    </svg>
                  </div>
                </div>
                <ul>
                  <li>
                    <span>Nombre</span>{item.name}
                  </li>
                  <li>
                    <span>Email</span>{item.email}
                  </li>
                </ul>
              </div>
            )
          })
      }

    </div>
  )
}