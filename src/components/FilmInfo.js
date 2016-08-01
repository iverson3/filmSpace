/**
 * Created by stefan.wang on 7/29/2016.
 */
import React from 'react'

export default class FilmInfo extends React.Component {
    render() {
        let no = this.props.no;
        return (
            <div className="filminfo-div">
                <img src="http://pic.maizuo.com/usr/100002716/0730af843df5c04b4483c311e095f06f.jpg" alt=""/>
                <h4>影片简介</h4>
                <div>
                    <p>导       演：雷尼·哈林</p>
                    <p>主       演：成龙 | 范冰冰 | 约翰尼·诺克斯维尔 | 张蓝心 | 延政勋</p>
                    <p>地区语言：中国大陆 美国 香港(汉语普通话 英语)</p>
                    <p>类       型：喜剧|动作</p>
                    <p>上映日期：7月21日上映</p>
                    <p>据悉《绝地逃亡》故事创意源于成龙，讲述了香港探员班尼·布莱克（成龙饰）跟踪黑道老大维克多·王长达十数年，为搜集他犯罪证据而被卷入一场“计中计”中，还将自己的侄女白舒（范冰冰饰）牵扯进来。在这场被中国特警、维克多•王、俄罗斯黑帮三面夹攻的“绝地逃亡”中，班尼结识了共患难的最佳拍档康纳（该角色将有好莱坞一线男星饰演），一位正被维克多·王和俄国杀手追捕逃命的美国赌博高手，三人最终将怎样结束这场冒险变得扑朔迷离。据悉本片故事主线从香港起始，途径澳门、西伯利亚、中蒙边境“二连浩特”、蒙古沙漠、四川山壁等具有鲜明地域特点的地区，为班尼与唐纳两人充满笑点、惊险、文化冲突的冒险增加了浓厚的异域风情。</p>
                </div>

                <input type="button" value="立即购票"/>
            </div>
        );
    }
}