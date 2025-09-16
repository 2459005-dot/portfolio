import React from 'react'
import './FileList.scss'

const FileList = () => {
  return (
    <ul className='file-list'>

      <li>
        <h3>샘플 이미지</h3>
        <div className="img-wrap">
          <img src="https://portfolio-crud2-s3.s3.ap-northeast-2.amazonaws.com/uploads/1757939533054-eHgFbb-test.png" alt="image" />
        </div>
        <p>설명</p>
        <div className="btn-wrap">
          <a href="https://portfolio-crud2-s3.s3.ap-northeast-2.amazonaws.com/uploads/1757939533054-eHgFbb-test.png">OPEN</a>
          <button className='delete-btn'>DELETE</button>
        </div>
      </li>
      <li>
        <h3>샘플 이미지</h3>
        <div className="img-wrap">
          <img src="https://portfolio-crud2-s3.s3.ap-northeast-2.amazonaws.com/uploads/1757939533054-eHgFbb-test.png" alt="image" />
        </div>
        <p>설명</p>
        <div className="btn-wrap">
          <a href="https://portfolio-crud2-s3.s3.ap-northeast-2.amazonaws.com/uploads/1757939533054-eHgFbb-test.png">OPEN</a>
          <button className='delete-btn'>DELETE</button>
        </div>
      </li>
      <li>
        <h3>샘플 이미지</h3>
        <div className="img-wrap">
          <img src="https://portfolio-crud2-s3.s3.ap-northeast-2.amazonaws.com/uploads/1757939533054-eHgFbb-test.png" alt="image" />
        </div>
        <p>설명</p>
        <div className="btn-wrap">
          <a href="https://portfolio-crud2-s3.s3.ap-northeast-2.amazonaws.com/uploads/1757939533054-eHgFbb-test.png">OPEN</a>
          <button className='delete-btn'>DELETE</button>
        </div>
      </li>

      

    </ul>
  )
}

export default FileList