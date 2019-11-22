import React, {Component} from 'react';

class TimeTable extends Component {
    render() {
        return (
			<table cellspacing="0">
            <thead>
                <tr>
                    <td id="timeblock_erase_btn">지우기</td>
                    <td class="timeblock_head">월</td>
                    <td class="timeblock_head">화</td>
                    <td class="timeblock_head">수</td>
                    <td class="timeblock_head">목</td>
                    <td class="timeblock_head">금</td>
                    <td class="timeblock_head">토</td>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <th >0교시<br/><span>(8:00~9:00)</span></th>
                    <td class="timeblock" data-timeblock="|월0|">ㅎㅇㅎㅇ</td>
                    <td class="timeblock" data-timeblock="|화0|"></td>
                    <td class="timeblock" data-timeblock="|수0|"></td>
                    <td class="timeblock" data-timeblock="|목0|"></td>
                    <td class="timeblock" data-timeblock="|금0|"></td>
                    <td class="timeblock" data-timeblock="|토0|"></td>
                </tr>
                <tr>
                    <th>8:30~9:00</th>
                    <td class="timeblock" data-timeblock="|월0.5|">ㅎㅇㅎㅇ</td>
                    <td class="timeblock" data-timeblock="|화0.5|"></td>
                    <td class="timeblock" data-timeblock="|수0.5|"></td>
                    <td class="timeblock" data-timeblock="|목0.5|"></td>
                    <td class="timeblock" data-timeblock="|금0.5|"></td>
                    <td class="timeblock" data-timeblock="|토0.5|"></td>
                </tr>
                <tr>
                    <th rowspan="2">1교시<br/><span>(9:00~10:00)</span></th>
                    <td class="timeblock" data-timeblock="|월1|"></td>
                    <td class="timeblock" data-timeblock="|화1|"></td>
                    <td class="timeblock" data-timeblock="|수1|"></td>
                    <td class="timeblock" data-timeblock="|목1|"></td>
                    <td class="timeblock" data-timeblock="|금1|"></td>
                    <td class="timeblock" data-timeblock="|토1|"></td>
                </tr>
                <tr>
                    <td class="timeblock" data-timeblock="|월1.5|"></td>
                    <td class="timeblock" data-timeblock="|화1.5|"></td>
                    <td class="timeblock" data-timeblock="|수1.5|"></td>
                    <td class="timeblock" data-timeblock="|목1.5|"></td>
                    <td class="timeblock" data-timeblock="|금1.5|"></td>
                    <td class="timeblock" data-timeblock="|토1.5|"></td>
                </tr>
                <tr>
                    <th rowspan="2">2교시<br/><span>(10:00~11:00)</span></th>
                    <td class="timeblock" data-timeblock="|월2|"></td>
                    <td class="timeblock" data-timeblock="|화2|"></td>
                    <td class="timeblock" data-timeblock="|수2|"></td>
                    <td class="timeblock" data-timeblock="|목2|"></td>
                    <td class="timeblock" data-timeblock="|금2|"></td>
                    <td class="timeblock" data-timeblock="|토2|"></td>
                </tr>
                <tr>
                    <td class="timeblock" data-timeblock="|월2.5|"></td>
                    <td class="timeblock" data-timeblock="|화2.5|"></td>
                    <td class="timeblock" data-timeblock="|수2.5|"></td>
                    <td class="timeblock" data-timeblock="|목2.5|"></td>
                    <td class="timeblock" data-timeblock="|금2.5|"></td>
                    <td class="timeblock" data-timeblock="|토2.5|"></td>
                </tr>
                <tr>
                    <th rowspan="2">3교시<br/><span>(11:00~12:00)</span></th>
                    <td class="timeblock" data-timeblock="|월3|"></td>
                    <td class="timeblock" data-timeblock="|화3|"></td>
                    <td class="timeblock" data-timeblock="|수3|"></td>
                    <td class="timeblock" data-timeblock="|목3|"></td>
                    <td class="timeblock" data-timeblock="|금3|"></td>
                    <td class="timeblock" data-timeblock="|토3|"></td>
                </tr>
                <tr>
                    <td class="timeblock" data-timeblock="|월3.5|"></td>
                    <td class="timeblock" data-timeblock="|화3.5|"></td>
                    <td class="timeblock" data-timeblock="|수3.5|"></td>
                    <td class="timeblock" data-timeblock="|목3.5|"></td>
                    <td class="timeblock" data-timeblock="|금3.5|"></td>
                    <td class="timeblock" data-timeblock="|토3.5|"></td>
                </tr>
                <tr>
                    <th rowspan="2">4교시<br/><span>(12:00~13:00)</span></th>
                    <td class="timeblock" data-timeblock="|월4|"></td>
                    <td class="timeblock" data-timeblock="|화4|"></td>
                    <td class="timeblock" data-timeblock="|수4|"></td>
                    <td class="timeblock" data-timeblock="|목4|"></td>
                    <td class="timeblock" data-timeblock="|금4|"></td>
                    <td class="timeblock" data-timeblock="|토4|"></td>
                </tr>
                <tr>
                    <td class="timeblock" data-timeblock="|월4.5|"></td>
                    <td class="timeblock" data-timeblock="|화4.5|"></td>
                    <td class="timeblock" data-timeblock="|수4.5|"></td>
                    <td class="timeblock" data-timeblock="|목4.5|"></td>
                    <td class="timeblock" data-timeblock="|금4.5|"></td>
                    <td class="timeblock" data-timeblock="|토4.5|"></td>
                </tr>
                <tr>
                    <th rowspan="2">5교시<br/><span>(13:00~14:00)</span></th>
                    <td class="timeblock" data-timeblock="|월5|"></td>
                    <td class="timeblock" data-timeblock="|화5|"></td>
                    <td class="timeblock" data-timeblock="|수5|"></td>
                    <td class="timeblock" data-timeblock="|목5|"></td>
                    <td class="timeblock" data-timeblock="|금5|"></td>
                    <td class="timeblock" data-timeblock="|토5|"></td>
                </tr>
                <tr>
                    <td class="timeblock" data-timeblock="|월5.5|"></td>
                    <td class="timeblock" data-timeblock="|화5.5|"></td>
                    <td class="timeblock" data-timeblock="|수5.5|"></td>
                    <td class="timeblock" data-timeblock="|목5.5|"></td>
                    <td class="timeblock" data-timeblock="|금5.5|"></td>
                    <td class="timeblock" data-timeblock="|토5.5|"></td>
                </tr>
                <tr>
                    <th rowspan="2">6교시<br/><span>(14:00~15:00)</span></th>
                    <td class="timeblock" data-timeblock="|월6|"></td>
                    <td class="timeblock" data-timeblock="|화6|"></td>
                    <td class="timeblock" data-timeblock="|수6|"></td>
                    <td class="timeblock" data-timeblock="|목6|"></td>
                    <td class="timeblock" data-timeblock="|금6|"></td>
                    <td class="timeblock" data-timeblock="|토6|"></td>
                </tr>
                <tr>
                    <td class="timeblock" data-timeblock="|월6.5|"></td>
                    <td class="timeblock" data-timeblock="|화6.5|"></td>
                    <td class="timeblock" data-timeblock="|수6.5|"></td>
                    <td class="timeblock" data-timeblock="|목6.5|"></td>
                    <td class="timeblock" data-timeblock="|금6.5|"></td>
                    <td class="timeblock" data-timeblock="|토6.5|"></td>
                </tr>
                <tr>
                    <th rowspan="2">7교시<br/><span>(15:00~16:00)</span></th>
                    <td class="timeblock" data-timeblock="|월7|"></td>
                    <td class="timeblock" data-timeblock="|화7|"></td>
                    <td class="timeblock" data-timeblock="|수7|"></td>
                    <td class="timeblock" data-timeblock="|목7|"></td>
                    <td class="timeblock" data-timeblock="|금7|"></td>
                    <td class="timeblock" data-timeblock="|토7|"></td>
                </tr>
                <tr>
                    <td class="timeblock" data-timeblock="|월7.5|"></td>
                    <td class="timeblock" data-timeblock="|화7.5|"></td>
                    <td class="timeblock" data-timeblock="|수7.5|"></td>
                    <td class="timeblock" data-timeblock="|목7.5|"></td>
                    <td class="timeblock" data-timeblock="|금7.5|"></td>
                    <td class="timeblock" data-timeblock="|토7.5|"></td>
                </tr>
                <tr>
                    <th rowspan="2">8교시<br/><span>(16:00~17:00)</span></th>
                    <td class="timeblock" data-timeblock="|월8|"></td>
                    <td class="timeblock" data-timeblock="|화8|"></td>
                    <td class="timeblock" data-timeblock="|수8|"></td>
                    <td class="timeblock" data-timeblock="|목8|"></td>
                    <td class="timeblock" data-timeblock="|금8|"></td>
                    <td class="timeblock" data-timeblock="|토8|"></td>
                </tr>
                <tr>
                    <td class="timeblock" data-timeblock="|월8.5|"></td>
                    <td class="timeblock" data-timeblock="|화8.5|"></td>
                    <td class="timeblock" data-timeblock="|수8.5|"></td>
                    <td class="timeblock" data-timeblock="|목8.5|"></td>
                    <td class="timeblock" data-timeblock="|금8.5|"></td>
                    <td class="timeblock" data-timeblock="|토8.5|"></td>
                </tr>
                <tr>
                    <th rowspan="2">9교시<br/><span>(17:00~18:00)</span></th>
                    <td class="timeblock" data-timeblock="|월9|"></td>
                    <td class="timeblock" data-timeblock="|화9|"></td>
                    <td class="timeblock" data-timeblock="|수9|"></td>
                    <td class="timeblock" data-timeblock="|목9|"></td>
                    <td class="timeblock" data-timeblock="|금9|"></td>
                    <td class="timeblock" data-timeblock="|토9|"></td>
                </tr>
                <tr>
                    <td class="timeblock" data-timeblock="|월9.5|"></td>
                    <td class="timeblock" data-timeblock="|화9.5|"></td>
                    <td class="timeblock" data-timeblock="|수9.5|"></td>
                    <td class="timeblock" data-timeblock="|목9.5|"></td>
                    <td class="timeblock" data-timeblock="|금9.5|"></td>
                    <td class="timeblock" data-timeblock="|토9.5|"></td>
                </tr>
            </tbody>
        </table>
        )
    }
}

export default TimeTable;