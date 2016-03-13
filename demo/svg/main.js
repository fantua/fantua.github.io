$(function () {
    var init = function () {
        var selected = null;
        var select = function (el) {
            selected = el;
            selected.attr({class: selected.attr('class') + ' selected'});
        };
        var unSelect = function () {
            selected.attr({class: selected.attr('class').replace('selected', '')});
            selected = null;
        };

        var paper = Snap(1800, 1000);

        var top = paper.line(100, 100, 400, 100).attr({class: 'line-h'});
        var bottom = paper.line(100, 300, 400, 300).attr({class: 'line-h'});

        var left = paper.line(100, 100, 100, 300).attr({class: 'line-v'});
        var right = paper.line(400, 100, 400, 300).attr({class: 'line-v'});

        top.mousedown(function () {
            select(top);

            paper.mousemove(function (e, x, y) {
                selected.attr({y1: y, y2: y});
                left.attr({y1: y});
                right.attr({y1: y});
            });
        });

        bottom.mousedown(function () {
            select(bottom);

            paper.mousemove(function (e, x, y) {
                selected.attr({y1: y, y2: y});
                left.attr({y2: y});
                right.attr({y2: y});
            });
        });

        left.mousedown(function () {
            select(left);

            paper.mousemove(function (e, x, y) {
                selected.attr({x1: x, x2: x});
                top.attr({x1: x});
                bottom.attr({x1: x});
            });
        });

        right.mousedown(function () {
            select(right);

            paper.mousemove(function (e, x, y) {
                selected.attr({x1: x, x2: x});
                top.attr({x2: x});
                bottom.attr({x2: x});
            });
        });

        paper.mouseup(function () {
            if (selected) {
                unSelect();
                paper.unmousemove();
            }
        });
    };

    $('#start').click(function () {
        this.remove();
        init();
    });

});