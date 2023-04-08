import Handsontable from "handsontable"
import { useEffect, useRef, useState } from "react"
import { HotTable, HotColumn } from "@handsontable/react";

export default function metrics({ datas }: any) {
    // const [dados, setDados] = useState([])
    const hotTable = useRef<Handsontable>();

    useEffect(() => {
        if (datas.length > 0) {
          hotTable.current?.loadData(datas)
        }
    }, [datas])

    return (
      <>
      </>
    )
}

export async function getServerSideProps() {
  try {
    const datas = await fetch(`${process.env.BASE_URL}/api/dados`)
      .then(response => response.json())
      .then(data => { return data })
      .catch(error => console.error(error));

    return {
      props: { datas },
    }
  } catch (error: any) {
    return { props: { error: error.message } };
  }
}